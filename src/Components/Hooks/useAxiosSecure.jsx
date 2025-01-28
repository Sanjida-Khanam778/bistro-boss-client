import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error?.response?.status;
      console.log(status);
      if (status === 401 || status === 403) {
        signout().then((res) => console.log(res.user));
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;