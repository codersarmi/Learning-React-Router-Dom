import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/users"}>User</NavLink>
      <NavLink to={"/products"}>Posts</NavLink>
    </>
  );
};

export default NavBar;
