import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/navigate/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Navbar from "./components/navigate/Navbar";
import ProductDetails from "./components/products/ProductDetails";
import ProductCard from "./components/products/ProductCard";
import ProductForm from "./components/products/Products";
import PlaceOrders from "./components/placeorder/PlaceOrders";
import Orders from "./components/placeorder/Orders";
import CrudOperation from "./components/crudOpration/CrudOperation";
import Cart from "./components/cart/Cart";
import Home from './components/homepage/Home';
import Products from "./components/products/Products";
import ProductList from "./components/products/ProductList";

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
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/productCard" element={<ProductCard />} />
          <Route path="/productCForm" element={<ProductForm />} />
          <Route path="/orders" element={<PlaceOrders/>} />
          <Route path="/orderList" element={<Orders/>} />
          <Route path="/crud" element={<CrudOperation/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/productList" element={<ProductList/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
