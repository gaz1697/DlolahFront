import { Outlet, Navigate } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default RootLayout;
