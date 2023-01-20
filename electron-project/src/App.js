import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./Components/SearchBar";
import MainMenu from "./Components/MainMenu";
import HeadHelp from "./Components/HeadHelp";
import { useState } from "react";
import SingIn from "./links/SignIn";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./links/Home";
import Footer from "./Components/Footer";
import FooterPart2 from "./Components/FooterPart2";
import FooterSecond from "./Components/FooterPart3";
import Cart from "./links/Cart";
import { ShopContextProvider } from "./links/shop-context";
// import {MainPage, setWishlist, cartShop} from './links/Home';

function App() {
  // const [cartItems, setCartItems] = useState([]);

  //wish
  const [wishList, setWishList] = useState([]);
  // cart
  const [cartShop, setCartShop] = useState([]);

  // const setCartShopFunc = (val) => {
  //   setCartShop([...cartShop, val]);
  // }

  return (
    <div>
      {/* <ShopContextProvider> */}
        <HeadHelp />
        <SearchBar
          wishList={wishList}
          setWishList={setWishList}
          cartShop={cartShop}
          setCartShop={setCartShop}
        />
        <MainMenu />

        <Routes>
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/cart" element={<Cart cartShop={cartShop} />} />
          <Route
            path="/MainPage"
            element={
              <MainPage
                wishList={wishList}
                setWishList={setWishList}
                cartShop={cartShop}
                setCartShop={setCartShop}
              />
            }
          />
        </Routes>

        <Footer />
        <div className="footerPart3Container">
          <FooterPart2 />
          <FooterSecond />
        </div>
      {/* </ShopContextProvider> */}
    </div>
  );
}
export default App;

{
  /* <div className="header">
        <HeadHelp />
        <SearchBar data={wishlist} data2={setCartShop} />
        <MainMenu />
        <div className="head-advertisment">
          <HeadAdvertisment />
        </div>
        <SecondHead />
        <div className="popularProduct">
          <div>
            <h1> Popular Product</h1>
          </div>
          <div className="productBarButton">
            <ProductBar />
          </div>
        </div>
        <div className="productMainApp">
        <ModalProduct />
          <ProductMain
            wishlist={wishlist}
            setWishlist={setWishlist}
            cartShop={cartShop}
            setCartShop={setCartShop}
          />
        </div>
        <BigBanner />
        <FooterProduct />
        <div className="CommentClientDot">
          <CommentClient />
        </div>
        <div className="gadnatalaaraashde">
          <SponsorName />
        </div>

        <div className="textLatest">
          <p> Latest news </p>
          <p> View all</p>
        </div>
        <div id="latestContainer">
          <LatestNews />
        </div>
        <Footer />
        <div className="footerPart3Container">
          <FooterPart2 />
          <FooterSecond />
        </div>
      </div> */
}

// <div className="detail">
// <HeadHelp />
// <SearchBar />
// <MainMenu />
// </div>
