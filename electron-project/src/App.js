import './App.css';
import SearchBar from './Components/SearchBar';
import 'bootstrap-icons/font/bootstrap-icons.css'

import MainMenu from './Components/MainMenu';
import HeadHelp from './Components/HeadHelp';
import HeadAdvertisment from './Components/HeadAdvertisment';
import SmallBanner from './Components/SmallBanner';
import TopBanner from './Components/TopBanner';


function App() {
  return (
    <div className='header'>
            <HeadHelp />
            <SearchBar />
            <MainMenu />
            <HeadAdvertisment />
            {/* <SmallBanner /> */}
            <TopBanner />
    </div>
  );
}

export default App;
