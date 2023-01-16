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
// import {MainPage, setWishlist, cartShop} from './links/Home';

function App() {

  

  const [wishlist, setWishlist] = useState(0);
  const [cartShop, setCartShop] = useState(0);

  return (
    <div>
      <HeadHelp />
      <SearchBar  data={wishlist} data2={setCartShop}  />
      <MainMenu />

      <Routes>
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MainPage" element={<MainPage />} 
         />
      </Routes>

      <Footer />
      <div className="footerPart3Container">
        <FooterPart2 />
        <FooterSecond />
      </div>
    </div>
  );
}
export default App;

      {/* <div className="header">
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
      </div> */}



// <div className="detail">
// <HeadHelp />
// <SearchBar />
// <MainMenu />
// </div>
