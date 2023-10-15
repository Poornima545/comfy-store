import { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import axios from "axios";
import ProductList from "./ProductList";
import { useSearchParams } from "react-router-dom";
import './style.css';

function  Products() {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState("");

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function getProducts() {
    console.log(form);
    console.log(new URLSearchParams(form).toString());
    const qs = new URLSearchParams(form).toString();
    axios
      .get(
        `https://strapi-store-server.onrender.com/api/products?${
          qs.length > 0 ? qs : ""
        }`
      )
      .then((res) => {
        setProducts(res.data.data);
        setMeta(res.data.meta);
      });
  }

  const handleSearch = (form) => {
    console.log(form);
    setForm(form);
    setSearchParams(form, () => {
      console.log(searchParams);
    });
  };

  return (
    <div className="container">
      {meta && (
        <ProductFilter
          companies={meta.companies}
          categories={meta.categories}
          handleSearch={handleSearch}
        />
      )}
      {products && <ProductList products={products} />}
    </div>
  );
}

export default  Products;