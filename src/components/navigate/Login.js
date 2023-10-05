import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({ userName: "", password: "" });

  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ userName: "", password: "" });
  }

  return (
    <div className="login-form">
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
        <button type="submit" className="login-button">
          Login
        </button>
        <br />
        <span>
          Not a Numberb yet?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
