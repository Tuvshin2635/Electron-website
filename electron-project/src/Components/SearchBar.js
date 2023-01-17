import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

// cartBoxContainer

function SearchBar({ placeholder, data, data2 }) {
  const [search, setSearch] = useState("");
  console.log(search);

  // function handleCartItems ()  {
  //   setCartItems([...cartItems, { id: id, name: title }]);
  // }

  // function cartContainer() {

  //   let cartBoxContainer = document.getElementById("cartBox");
  //   if (cartBoxContainer.style.display != "block") {
  //     cartBoxContainer.style = "display:block";
  //   } else {
  //     cartBoxContainer.style = "display:none";
  //   }
  // }

  return (
    <div className="search">
      <div>
        <Link to="/MainPage">
          <img src="images/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="searchInputs">
        <input
          type="text"
          onChange={(data) => setSearch(data.target.value)}
          // placeholder={placeholder}
        />
        <div className="searchButton">
          <button> Search </button>
        </div>
      </div>
      <div className="dataResult"></div>
      <div className="signInHeart">
        <p>
          <Link to="/SingIn">
            <i class="bi bi-person-plus"></i> Sign in
          </Link>
        </p>
        <p className="heartCart">
          <i class="bi bi-heart-fill">
            <a className="too">{data}</a>
          </i>
        </p>
        <p>
          <Link to="/Cart">
            <i class="bi bi-cart"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SearchBar;
