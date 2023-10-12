import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {BsFillGrid1X2Fill, BsList} from "react-icons/bs"


function ProductsList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => setProductsList(res.data.data));
  }, []);

  return (
    <>
    <div className="product-list">
        <div className="grid-list">
        <h3>{productsList.length} Products</h3>
        </div>
        <div className="grid-view">
          <button onClick="gridView()" style={{backgroundColor:"blue", color:"white", borderRadius:"50px", padding:"10PX"}}><BsFillGrid1X2Fill/></button>
          <button onClick="listView()" style={{fontSize:"30px"}}><BsList/></button>
          </div>
        </div>
        <hr/>
      <div>
        {productsList.map((product) => (
                  <Link to={"/productdetails" + product.id} style={{textDecoration:"none"}}>
                    <div className="g-col-4 g-col-md-4 card shadow-md"style={{ width: "18rem"}}>
                    <img
                      src={product["attributes"]["image"]}
                      alt="lamp"
                      className="card-img-top" 
                    />
                    <p style={{marginTop:"10px"}}>{product["attributes"]["title"]}</p>
                    <span>{product["attributes"]["price"]}</span>
                    </div>
                  </Link>
        ))}
        </div>
  </>
  )
}

export default ProductsList;