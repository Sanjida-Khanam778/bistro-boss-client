import React from "react";
import {
  FaAd,
  FaEnvelope,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils
} from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart()
  return (
    <div className="flex">
      <div className="min-h-screen w-64 bg-orange-300 p-5">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaAd></FaAd>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaList></FaList>
                  Real Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
