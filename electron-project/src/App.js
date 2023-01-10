import "./App.css";
import SearchBar from "./Components/SearchBar";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainMenu from "./Components/MainMenu";
import HeadHelp from "./Components/HeadHelp";
import HeadAdvertisment from "./Components/HeadAdvertisment";
import SecondHead from "./Components/SecondHead";
import ProductBar from "./Components/ProductBar";

import ProductMain from "./Components/MainProduct";
import BigBanner from "./Components/BigBanner";
import FooterProduct from "./Components/ProductFooter";
import CommentClient from "./Components/CommentCLients";
import SponsorName from "./Components/Sponsor";
// import HandleUpVote from "./Components/HandleUPVote";
import LatestNews from "./Components/Latest";
import Footer from "./Components/Footer";
import FooterSecond from "./Components/FooterPart3";
import FooterPart2 from "./Components/FooterPart2";

// Detail page 

import MainDetailPage from "./Components/DetailMain";

function App() {
  return (
    <div>
      <div className="header">
        <HeadHelp />
        <SearchBar />
        <MainMenu />
        <div className="head-advertisment">
          <HeadAdvertisment />
        </div>
        <SecondHead />
        <div className="popularProduct">
          <div>
            {" "}
            <h1> Popular Product</h1>{" "}
          </div>
          <div className="productBarButton">
            <ProductBar />
          </div>
        </div>
        <div className="productMainApp">
          <ProductMain />
        </div>
        <BigBanner />
        <FooterProduct />
        <div className="CommentClientDot">
          <CommentClient />
        </div>
        <div className="gadnatalaaraashde">
          <SponsorName />
        </div>
        {/* <HandleUpVote /> */}
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
      <div className="detail">
        <HeadHelp />
        <SearchBar />
        <MainMenu />

      </div>
    </div>
  );
}
export default App;
