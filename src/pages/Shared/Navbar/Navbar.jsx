import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../Providers/ProductsProvider";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { ordered } = useContext(ProductsContext);

  const listItems = (
    <>
      <li>
        <div className="form-control">
          <div className="input-group hidden lg:block">
            <input
              type="text"
              placeholder="Search SnipShop.com"
              className="input input-bordered w-[500px]"
            />
            <button className="btn btn-square bg-[#4DC3F7] w-[64px]">
              <FaSearch color="white" />
            </button>
          </div>
        </div>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-[#1E66FF] sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src="https://i.ibb.co/fd28Xp9/Logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user?.photoURL && user?.email && (
          <div
            className="mr-2 tooltip tooltip-left"
            data-tip={`${user.displayName}`}
          >
            <img
              src={user?.photoURL}
              style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              alt=""
            />
          </div>
        )}
        {user ? (
          <button className="btn btn-warning btn-xs" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-ghost flex gap-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Account
          </Link>
        )}
        <div className="lg:flex gap-1 text-white hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          My Items
        </div>
        <Link to="/orders" className="btn btn-ghost btn-circle text-white">
          <div className="indicator">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {ordered.length}
            </span>
          </div>
        </Link>
        <div className="text-white hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
