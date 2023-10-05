import { NavLink } from "react-router-dom";

function Main() {
  const className = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="main">
      <NavLink className={className} to="/home">
        Home
      </NavLink>
      <NavLink className={className} to="/about">
        About
      </NavLink>
      <NavLink className={className} to="/products">
        Products
      </NavLink>
      <NavLink className={className} to="/cart">
        Cart
      </NavLink>
    </nav>
  );
}

export default Main;
