import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [login, setLogin] = useState({ userName: "", password: "", email: "" });

  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ userName: "", password: "", email: "" });
  }

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <br />
        <input
          name="userName"
          placeholder="Enter your userName"
          value={login.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          placeholder="Enter your password"
          type="password"
          value={login.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="email"
          placeholder="Enter your email"
          value={login.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
        <br />
        <span>
          Not a Numberb yet?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
