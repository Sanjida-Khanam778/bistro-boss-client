import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // const axiosSecure = useAxiosSecure()
  //   const [menu, setMenu] = useState([]);
  //   const [loading, setLoading] = useState(true)
  //     useEffect(() => {
  //       axiosSecure.get("/menu")
  //         .then((res) => {
  //           setMenu(res.data);
  //           setLoading(false)
  //         });
  //     }, []);
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [menu, loading, refetch];
};

export default useMenu;
