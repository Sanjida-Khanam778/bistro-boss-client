import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Components/Hooks/useCart";
import useAdmin from "../../Components/Hooks/useAdmin";

const Navbar = () => {
  const [cart] = useCart();
  const { user, signout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    signout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navlinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      {
        user && isAdmin && 
      <li>
        <Link to={"/dashboard/AdminHome"}>Dashboard</Link>
      </li>
      }
      {
        user && !isAdmin && 
      <li>
        <Link to={"/dashboard/userHome"}>Dashboard</Link>
      </li>
      }

      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn">
            <FaCartShopping></FaCartShopping>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <p>{user?.displayName}</p>
          <button onClick={handleLogOut} className="btn btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-25 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
