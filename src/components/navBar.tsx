import * as React from "react";
import NavBarButton from "./ui/NavBarButton";

const NavBar = () => {
  return (
    <nav className="bg-blue-800 p-2 w-full">
      <ul className="flex flex-row space-x-4">
        <NavBarButton buttonName="Home" bPath="/" />
        <NavBarButton buttonName="Dashboard" bPath="/dashboard" />
        <NavBarButton buttonName="About us" bPath="/about" />
      </ul>
    </nav>
  );
};

export default NavBar;
