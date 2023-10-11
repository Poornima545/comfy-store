import React from "react";
import { Link } from "react-router-dom";
import FeaturedProducts from "../homepage/FeaturedProducts";

function Content() {
  return (
    <React.Fragment>
      <div className="content">
        <div>
          <h1 className="hdr">We are changing the way people shop </h1>
          <p className="content-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button
            style={{
              padding: "15px",
              textTransform: "uppercase",
              backgroundColor: "#057aff",
              border: "none",
              borderRadius: "14px",
              marginTop: "2rem",
            }}
            className="content-img"
          >
            {" "}
            <Link to="/products"> our products</Link>{" "}
          </button>
        </div>
        <img
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
          alt="slider"
          style={{ width: "300px", height: "350px", borderRadius: "10%" }}
        />
      </div>
      <h2 className="featured-products">Featured Products</h2>
      <hr />
      <FeaturedProducts />
    </React.Fragment>
  );
}

export default Content;
