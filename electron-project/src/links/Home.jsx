import "../App.css";
import { useState } from "react";
import HeadAdvertisment from "../Components/HeadAdvertisment";
import SecondHead from "../Components/SecondHead";
import ProductBar from "../Components/ProductBar";
import ProductMain from "../Components/MainProduct";
import BigBanner from "../Components/BigBanner";
import FooterProduct from "../Components/ProductFooter";
import CommentClient from "../Components/CommentCLients";
import SponsorName from "../Components/Sponsor";
import LatestNews from "../Components/Latest";
import SearchBar from "../Components/SearchBar";

export default function MainPage(props) {
  // const [cartShop, setCartShop] = useState(0);
  // const [wishList, setWishList] = useState(0);

  return (
    <div className="header">
      {/* <SearchBar data={wishlist} data2={setCartShop} /> */}

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
          wishList={props.wishList}
          setWishList={props.setWishList}
          // cartShop={props.cartShop}
          // setCartShop={props.setCartShop}
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
    </div>
  );
}
