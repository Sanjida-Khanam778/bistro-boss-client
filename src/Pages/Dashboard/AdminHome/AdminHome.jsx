import React from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUser, FaUsers } from "react-icons/fa6";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: stats={} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data)
      return (res.data);
    },
  });
  console.log(stats)
  return (
    <div>
      <h2 className="text-3xl">
        Hi, welcome {user?.displayName ? user.displayName : "back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaBook></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItem}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
           
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;