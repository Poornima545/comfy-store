import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState();
  const [count, setCount] = useState(1);
  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProductDetails(res.data.data));
  }, [id]);

  return (
    <>
      {productDetails && (
        <div className="productdetail">
          <img src={productDetails["attributes"]["image"]} alt="lamp" />
          <div className="product-para">
            <h2>{productDetails["attributes"]["title"]}</h2>
            <h4>{productDetails["attributes"]["company"]}</h4>
            <span>{productDetails["attributes"]["price"]}</span>
            <p>{productDetails["attributes"]["description"]}</p>
            <div>
              <label>colors</label>
              {productDetails["attributes"]["colors"].map((color) => (
                <input type="color" key={color} value={color} disabled />
              ))}
            </div>
            <br />
            <select
              name="count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <button type="button"> 
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
