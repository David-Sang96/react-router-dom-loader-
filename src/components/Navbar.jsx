import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-600 text-white p-2">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/products"}>Posts</NavLink>
    </nav>
  );
};

export default Navbar;
