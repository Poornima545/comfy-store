
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate()


  const handleChange = (e) => {
    const { name, value } = e && e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(login);
    if (login.email.length && login.password.length) {
        doLogin({...login})
      }
    }  
  

  const doLogin = ({ email, password}) => {
    axios
      .post("https://strapi-store-server.onrender.com/api/auth/local", {
        identifier: email ,
        password:  password, 
      })
      .then((res) => { 
        setLogin({email:"", password:""})
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate("/")
      })
  };

const handleGuestLogin = () => {
  doLogin({email:"test@test", password:"secret"})
}

  return (
    <div className="login-form">
      <h1 style={{ textAlign: "center", fontWeight: "600",color:"#394e6a" }}>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ marginTop: "20px" }}>
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleChange}
          style={{ padding: " 2px 30px" }}
        />
        <br />
        <label style={{ marginTop: "20px" }}>
          Password
        </label>
        <br />
        <input
          name="password"
          type="password"
          value={login.password}
          style={{ padding: " 2px 30px" }}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="login-button">
          Login
        </button>
        <br />
        <button type="button" className="guest-user" onClick={handleGuestLogin}>
          Guest user
        </button>
        <br />
        <br />
        <span>
          Not a Numberb yet?<Link to="/register">&nbsp;Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
