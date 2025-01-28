import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="p-8">
      <div className="divider"></div>
      <button onClick={handleGoogleLogin} className="btn">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
