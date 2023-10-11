import { Link, NavLink } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";

function Navbar() {
  const className = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <Link id="navicon" href="#">
        C
      </Link>
      <div className="nav">
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
      </div>
      <div className="moon-icon">
        <button>
          <BsFillMoonFill />
        </button>
        <Link href="#">
          <BsFillCartDashFill />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
