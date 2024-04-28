import { Link } from "react-router-dom";

interface NavBarButtonProps {
  buttonName: string;
  bPath: string;
}

const NavBarButton = ({ buttonName, bPath }: NavBarButtonProps) => {
  return (
    <li>
      <Link className="text-white hover:text-gray-300" to={bPath}>
        {buttonName}
      </Link>
    </li>
  );
};

export default NavBarButton;
