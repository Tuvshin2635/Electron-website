import React from "react";
import "./SearchBar.css";

// cartBoxContainer

function SearchBar({ placeholder, data}) {
  function cartContainer() {
    let cartBoxContainer = document.getElementById("cartBox");
    if (cartBoxContainer.style != "display:block") {
      cartBoxContainer.style = "display:block";
    } else {
      cartBoxContainer.style = "display:none";
    }
  }

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
        <i class="bi bi-cart" onClick={cartContainer} >
            <div id="cartBox"  >
                { }
              
            </div>
          </i>
        </p>
      </div>
    </div>
  );
}
export default SearchBar;
