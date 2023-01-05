import './App.css';
import SearchBar from './Components/SearchBar';
import 'bootstrap-icons/font/bootstrap-icons.css'

import MainMenu from './Components/MainMenu';
import HeadHelp from './Components/HeadHelp';
import HeadAdvertisment from './Components/HeadAdvertisment';
import HeadBanner from './Components/SmallBanner';

function App() {
  return (
    <div className='header'>
            <HeadHelp />
            <SearchBar />
            <MainMenu />
            <HeadAdvertisment />
            <HeadBanner />

    </div>
  );
}
export default App;
