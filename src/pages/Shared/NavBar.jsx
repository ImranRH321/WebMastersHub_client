import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  const user = true;
  // all link
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>

      {/* TODO: conditional user dashboard route  */}
      {user && (
        <li>
          <Link to="/dashboard">Dashboard </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-purple-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            {/* sm dv  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* lg DV */}
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Bijoy Learn School
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end me-5">
          {/* end  */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    className="mask mask-decagon w-10 rounded-full"
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <div className="flex flex-col mt-3 py-5 justify-center items-center">
                  <div className="oneimg">
                    <img
                      className="w-24 h-24  mask mask-circle"
                      src={user?.photoURL}
                    />
                  </div>
                  <p className="mt-2 fw-semibold text-primary">
                    {user?.displayName}
                  </p>
                  <p className="fw-semibold text-primary">
                    email: {user?.email}
                  </p>
                  {/* <p className="font-semibold text-2xl">{role}</p>  */}
                  <button
                    // onClick={logOut} 
                    className="btn bg-red-600 hover:bg-red-400 btn-sm mt-4"
                  >
                    LogOut
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-secondary btn-sm">
                Login
              </button>{" "}
            </Link>
          )}
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
