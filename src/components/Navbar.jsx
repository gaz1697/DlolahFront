import { Link } from "react-router-dom";
import navLinks from "../data/nav_links";
import React, { useState, useContext } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="bg-primary text-white focus:text-white">
      <div className="navbar ">
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            Dlolah
          </Link>
        </div>
        <div className="flex-3">
          <ul className="menu menu-horizontal px-1">
            {currentUser ? (
              <li>
                <button className="bg-white text-blue-500 hover:text-white" onClick={logout}>
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <Link className=" btn-ghost bg-white text-blue-500 hover:text-white" to="/dashboard">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
