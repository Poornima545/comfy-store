import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navigate/Header";
import Login from './components/login/Login';
import Register from "./components/register/Register";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navigate/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
