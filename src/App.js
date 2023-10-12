import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navigate/Header";
import Login from './components/login/Login';
import Register from "./components/register/Register";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navigate/Navbar";
// import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";
import ProductCard from "./components/products/ProductCard";
import AllProducts from "./components/products/AllProducts";

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
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/productCard" element={<ProductCard/>} />
          <Route path="/products" element={<AllProducts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
