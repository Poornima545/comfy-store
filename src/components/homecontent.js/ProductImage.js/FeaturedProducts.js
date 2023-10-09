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
    <div className="f-col-4 g-col-md-4 card shadow-md" style={{ width: "20%" }}>
      <img
        src={`${product["attributes"]["image"]}&w=250`}
        className="card-img-top"
        alt="lamp"
      />
      <div className="card-body">
        <h3 className="card-name">{product["attributes"]["title"]}</h3>
        <NavLink to="/productdetails" className="card-price">
          {product["attributes"]["price"]}
        </NavLink>
      </div>
    </div>
  );
}

export default FeaturedProducts;
