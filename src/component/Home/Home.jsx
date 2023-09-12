import React from "react";
import products from "../../assets/CategoryData";
import "./Home.css";
const Home = () => {
  return (
    <div className="category-card">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="category-image"
            />
            <h2 className="category-title">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
