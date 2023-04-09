import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-24 bg-indigo-50 ">
        <h3 className="text-3xl font-semibold">CareerPoint</h3>
        <div className="flex flex-col mb-3 items-center gap-2 md:flex-row md:gap-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/appliedjobs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </div>
        <button className="btn-primary">Start Applying</button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
