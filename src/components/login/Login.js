import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e && e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    if (login.email.length && login.password.length){
      doLogin({...login});
    }
  }

  const doLogin = ({email, password}) => {
    axios.post('https://strapi-store-server.onrender.com/api/auth/local',{
      idetifier: email,
      password:password
    })
    .then((res) => {
      setLogin({email:"", password:""})
      localStorage.setItem("user", JSON.stringify(res.data))
      navigate("/")
    })
  }

  const handleGuestLogin = () => {
    doLogin({email: "poo@gmqil.com", password:"poornima"})
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <br />
        <input type="userName"
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
        <button type="button" className="guest-user" onClick={handleGuestLogin}>Guest user</button>
        <br/>
        <span>
          Not a Numberb yet?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
