import "./App.css";
import SearchBar from "./Components/SearchBar";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainMenu from "./Components/MainMenu";
import HeadHelp from "./Components/HeadHelp";
import HeadAdvertisment from "./Components/HeadAdvertisment";
import SecondHead from "./Components/SecondHead";
// import AliceCarousels from './Components/BannerCarousel'

function App() {
  return (
    <div className="header">
      <HeadHelp />
      <SearchBar />
      <MainMenu />
      <div className="head-advertisment">
        <HeadAdvertisment />
      </div>
      <div className="secondHead2"> 
      <SecondHead  />
        </div>



    </div>
  );
}
export default App;
