import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
            <Card product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ product }) {
  return (
    <div className="f-col-4 shadow-md" style={{ width: "1rem" }}>
      <img
        src={`${product[0]["attributes"]["image"]}&w=200`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-name">{product["attributes"]["title"]}</h5>
        <NavLink to="">{product["attributes"]["price"]}</NavLink>
      </div>
    </div>
  );
}

export default FeaturedProducts;
