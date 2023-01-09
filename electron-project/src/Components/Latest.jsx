import React from "react";
import AliceCarousel from "react-alice-carousel";
import { latestPart } from "../Data/Banners";

function LatestNews() {
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
            <h3> {data.comment}</h3>
          </div>
        </div>
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
  )
}
export default LatestNews;
