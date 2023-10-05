import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/homepage/Header";
import Login from "./components/navigate/Login";
import Register from "./components/navigate/Register";
import Main from "./components/homepage/Main";
import About from "./components/navigate/About";
import Cart from "./components/navigate/Cart";
import ProductList from "./components/products/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productlist" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
