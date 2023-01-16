// import "./App.css";
import "../App.css";

import { useState } from "react";
// import {Routes, Route, Link} from "react-router-dom";
import HeadHelp from "../Components/HeadHelp";
import SearchBar from "../Components/SearchBar";
import MainMenu from "../Components/MainMenu";
import HeadAdvertisment from "../Components/HeadAdvertisment";
import SecondHead from "../Components/SecondHead";
import ProductBar from "../Components/ProductBar";
import ProductMain from "../Components/MainProduct";
import BigBanner from "../Components/BigBanner";
import FooterProduct from "../Components/ProductFooter";
import CommentClient from "../Components/CommentCLients";
import SponsorName from "../Components/Sponsor";
import LatestNews from "../Components/Latest";
import FooterPart2 from "../Components/FooterPart2";
import FooterSecond from "../Components/FooterPart3";
import Footer from "../Components/Footer";

export default function MainPage() {
  const [wishlist, setWishlist] = useState(0);
  const [cartShop, setCartShop] = useState(0);

  return (
    <div className="header">
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
    </div>
  );
}
