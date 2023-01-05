import './App.css';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div className='header'>
      {/* tsagaan jijig header */}
      <div className='header-first-line' >
        <div> <p> Need help? Call us: (+98) 0234 456 789 </p></div>
        <div className='header-first-line-end' >
          <div> <p> 
            <span> <i class="fa-thin fa-location-dot"></i> </span> <a href='#'> Our Store </a></p></div>
          <div> <p> <i class="fa-thin fa-truck-fast"></i> <a href='#'> Track your order</a></p> </div>
        </div>
      </div>
      {/* 2nd header tsenher nariin */}
      <div className='header-second-line'>
        <div className='header-second-line-inside'>
          <img src='images/logo.jpg' alt='logo' />
          <form>
            <input placeholder='Search any thing'></input>
            <button> Search </button>
          </form>
        </div>

      {/* 2nd header tsenher nariin 2 */}
      <SearchBar />

      </div>



    </div>
  );
}

export default App;
