import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create-templates">Create Templates</NavLink>
    </nav>
  );
};

export default Navbar;
