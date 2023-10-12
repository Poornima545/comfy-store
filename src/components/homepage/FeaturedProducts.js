import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from  '../products/ProductCard'


const url =
  "https://strapi-store-server.onrender.com/api/products?featured=true";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="grid text-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
