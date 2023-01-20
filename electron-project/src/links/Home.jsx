import "../App.css";
import HeadAdvertisment from "../Components/HeadAdvertisment";
import SecondHead from "../Components/SecondHead";
import ProductBar from "../Components/ProductBar";
import ProductMain from "../Components/MainProduct";
import BigBanner from "../Components/BigBanner";
import FooterProduct from "../Components/ProductFooter";
import CommentClient from "../Components/CommentCLients";
import SponsorName from "../Components/Sponsor";
import LatestNews from "../Components/Latest";

export default function MainPage(props) {


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
          cartShop={props.cartShop}
          setCartShop={props.setCartShop}
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
