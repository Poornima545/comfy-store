import { NavLink } from "react-router-dom";
import Main from "./Navbar";
import Home from "../homepage/Home";

function Header() {
  return (
    <>
      <div className="header">
        <div className="signup">
          <NavLink to="/login">Sign in/Guest</NavLink>
        </div>
        <div className="account">
          <NavLink to="/register">Create Account</NavLink>
        </div>
      </div>
      <Main />
      <Home />
    </>
  );
}

export default Header;
