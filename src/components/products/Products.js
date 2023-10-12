import { useEffect, useState } from "react";
import axios from "axios";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

 function Products() {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data.data);
        setMeta(res.data.meta);
      });
  }, []);

  return (
    <div className="container">
      {meta && (
        <ProductFilter
          categories={meta.categories}
          companies={meta.companies}
        />
      )}
      {products && <ProductList products={products} />}
    </div>
  );
}

export default Products;