import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productOpt = {
  options: [1, 2, 3, 4, 5],
};

function ProductDetails() {
  const [productDetail, setProductDetail] = useState(null);
  const { id } = useParams;

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => setProductDetail(res.data.data));
  }, [id]);

  const [options] = useState(productOpt.options);

  return (
    <>
      {productDetail && (
        <div className="productdetail">
          <img src={productDetail.attributes.image} alt="lamp" />
          <div className="product-para">
            <h2>{productDetail.attributes.title}</h2>
            <h4>{productDetail.attributes.company}</h4>
            <span>{productDetail.attributes.price}</span>
            <p>{productDetail.attributes.description}</p>
            <div>
              <label>colors</label>
              {productDetail.attributes.colors.map((color) => (
                <input type="color" key={color} value={color} />
              ))}
            </div>
            <div>
              <label>Amount</label> <br />
              <select id="company">
                {options.map((value) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
            </div>
            <button> Add To Bag</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
