import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">
          {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
          <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
            logo
          </p>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
