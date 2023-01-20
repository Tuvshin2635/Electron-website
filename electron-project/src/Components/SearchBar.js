import React from "react";
import "../App.css";
import { Link } from "react-router-dom";



// cartBoxContainer

function SearchBar(props) {
  // const [search, setSearch] = useState("");
  // console.log(search);

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
          // onChange={(data) => setSearch(data.target.value)}
          // placeholder={placeholder}
        />
        <div className="searchButton">
          <button> Search </button>
        </div>
      </div>
      {/* <div className="dataResult"></div> */}

      <div className="signInHeart">
        <p>
          <Link to="/SingIn">
            <i class="bi bi-person-plus"></i> Sign in
          </Link>
        </p>

                
        <div class="ui compact menu">
          <div class="ui simple dropdown item">
            <i class="bi bi-heart-fill">{props.wishList.length}</i>
            
            <i class="dropdown icon"></i>
            <div class="menu">
             
            </div>

            {props.wishList.map((w, index) => {
                return (
                  <div class="item">
                    {w.name}
                    <a>
                      <button
                        class="negative ui button"
                        onClick={() => {
                          props.setWishList(
                            props.wishList.filter((wish) => wish.id !== w.id) //ustgax
                          );
                        }}
                      ></button>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>

        <p>
          <Link to="/Cart" cartShop={props.cartShop} >
            <i class="bi bi-cart"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SearchBar;
