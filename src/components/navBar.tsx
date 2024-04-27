import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-800 p-2 w-full">
      <ul className="flex flex-row space-x-4">
        <li>
          <Link className="text-white hover:text-gray-300" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="text-white hover:text-gray-300" to="/about">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
