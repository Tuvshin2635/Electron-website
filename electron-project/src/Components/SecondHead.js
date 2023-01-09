import React from "react";
import AliceCarousel from "react-alice-carousel";
import { bannerList } from "../Data/Banners";

function SecondHead() {
  const headadverTwo = bannerList.map((data) => {
    return (
        <div className="secondHeader">
          <img className="secondHeadImg" src={data.image} />
          <div className="secondHeadTitle">
            <h1> {data.title} </h1>
            <h1> {data.description} </h1>
          </div>
      </div>
    );
  });
  return (
    <AliceCarousel
      id="smallBannerSlider"
      responsive={{
        1024: { items: 3 },
      }}
    >
      {headadverTwo}
    </AliceCarousel>
  );
}
export default SecondHead;
