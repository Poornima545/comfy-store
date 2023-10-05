import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const url =
  "https://strapi-store-server.onrender.com/api/products?featured=true";

function  ProductDetails() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setProductList(res.data.data));
  }, []);

  return (
    <div>
      {productList.length > 0 && (
        <div className="text-center">
          {productList.map((productlist) => (
            <Card productlist={productlist} key={productlist.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ productlist }) {
  return (
    <div className="f-col-4 g-col-md-4 shadow-md" style={{ width: "18rem" }}>
      <img
        src={`${productlist["attributes"]["image"]}&w=200`}
        className="card-img-top"
        alt="lamp"
      />
      <div className="card-body">
        <h1 className="card-name">{productlist["attributes"]["title"]}</h1>
        <h4 className="card-company">{productlist["attributes"]["company"]}</h4>
        <NavLink to="/featuredproducts" className="price">{productlist["attributes"]["price"]}</NavLink>
        <p className="card-para">{productlist["attributes"]["description"]}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
