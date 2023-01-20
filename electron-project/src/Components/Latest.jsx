import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { latestPart } from "../Data/Banners";

function LatestNews(props) {
  // const [cartList, setCartList] = useState('')

  // const cartClick = () => {
  //   return(
  //     setCartList('hi')
  //   )
  // }

  const newsLatest = latestPart.map((data) => {
    return (
      <div>
        <div className="LatestNewsContainer">
          <div className="latestImg">
            <img src={data.thumbnail} />
          </div>
          <div className="latestText">
            <h1> {data.date}</h1>
            <h2> {data.title}</h2>
            <p> {data.description}</p>
            <h3> {data.comment} </h3>
            {/* <button onClick={() => setCartList("setCartList tushilt")}> Add Cart </button>
<h1> {cartList} </h1> */}
          </div>
        </div>
        <button>{/* // onClick={cartClick}> cartclick  */}</button>
        <h1>{/* {cartList} */}</h1>
      </div>
    );
  });
  return (
    <AliceCarousel
      disableButtonsControls="true"
      responsive={{
        1024: { items: 2 },
      }}
    >
      {newsLatest}
    </AliceCarousel>
  );
}
export default LatestNews;
