import React from "react";
import "./SearchBar.css";

function SearchBar({placeholder, data}) {
    return (
        <div className="search" >
            <div> <img src='images/logo.png' alt='logo' /> </div>
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="searchButton"> 
                    <button> Search </button> 
                </div>
            </div>
            <div className="dataResult"></div>
            <div className="signInHeart">
                <p> <i class="bi bi-person-plus"></i>  Sign in</p>
                <p> <i class="bi bi-balloon-heart"></i> </p>
                <p> <i class="bi bi-cart"></i> </p>
            </div>
        </div>
    );
}
export default SearchBar;
