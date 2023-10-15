import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import "./style.css";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();
  const { dispatch } = useContext(CartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProductDetails(res.data.data));
  }, [id]);

  return (
    <div className="container">
      {productDetails && (
        <div className="product-details d-flex gap-3">
          <img
            src={productDetails["attributes"]["image"]}
            className="flex-grow-1"
            alt="lazy"
            style={{ maxWidth: "40%" }}
          />
          <div
            className="flex-grow-1"
            style={{ background: "white", color: "black" }}
          >
            <h2>{productDetails["attributes"]["title"]}</h2>
            <h4>{productDetails["attributes"]["company"]}</h4>
            <p>{productDetails["attributes"]["price"]}</p>
            <p>{productDetails["attributes"]["description"]}</p>
            <h6>Colors</h6>
            {productDetails["attributes"]["colors"].map((color) => (
              <input
                type="color"
                value={color}
                key={color}
                disabled
                style={{ marginBottom: "1rem" }}
              />
            ))}
            <br />
            <label className="select-items">
              Amount
              <br />
              <select
                id="select-items"
                name="count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <br />
            <button
              className="add-to-cart"
              onClick={() =>
                dispatch({
                  action: "ADD_ITEM_CART",
                  value: { id, ...productDetails, count },
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
