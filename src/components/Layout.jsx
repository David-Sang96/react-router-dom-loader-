import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-1/3 mx-auto p-2">
      <Navbar />
      <div className="w-3/4 text-white mx-auto mt-5 border shadow-md p-3 bg-purple-500 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
