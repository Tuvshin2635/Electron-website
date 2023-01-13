import React from "react";
import "./SearchBar.css";

function cartContainer() {
  let cartBoxContainer = document.getElementById("cartBox");
  cartBoxContainer.style = "display:block";
  console.log("cart clicked");

}
// cartBoxContainer

function SearchBar({ placeholder, data, data2 }) {
  return (
    <div className="search">
      <div>
        {" "}
        <img src="images/logo.png" alt="logo" />{" "}
      </div>
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <div className="searchButton">
          <button> Search </button>
        </div>
      </div>
      <div className="dataResult"></div>
      <div className="signInHeart">
        <p>
          <i class="bi bi-person-plus"></i> Sign in
        </p>
        <p className="heartCart">
          <i class="bi bi-heart-fill">
            <a className="too">{data}</a>{" "}
          </i>
        </p>
        <p>
          <i class="bi bi-cart">
            <div id="cartBox" onClick={cartContainer}>
              {}
            </div>
          </i>{" "}
        </p>
      </div>
    </div>
  );
}
export default SearchBar;
