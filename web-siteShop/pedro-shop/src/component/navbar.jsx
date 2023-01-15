import "../component/navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <a> Shop</a>
        </Link>
        <Link to="/cart">
          <a>
            <i class="bi bi-cart"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};
