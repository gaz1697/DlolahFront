import { Link } from "react-router-dom";
import React from 'react';


const NavBarButton = ({ buttonName, bPath }) => {
  return (
    <li>
      <Link className="text-white hover:text-gray-300" to={bPath}>
        {buttonName}
      </Link>
    </li>
  );
};

export default NavBarButton;
