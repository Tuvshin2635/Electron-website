import React from "react";
import AliceCarousel from "react-alice-carousel";
import { bannerList } from "../Data/Banners";

function SecondHead() {
  const headadverTwo = bannerList.map((data) => {
    const nextData = data.products.map((d) => {
      return (
        <div className="secondHeader">
          <img className="secondHeadImg" src={d.image} />
          <div className="secondHeadTitle">
            <h1> {d.title} </h1>
            <h1> {d.description} </h1>
          </div>
        </div>
      );
    });
    return nextData;
  });
  return (
    <AliceCarousel className="taslax"
      disableDotsControls="true"
      responsive={{
        100: { items: 1 },
      }} >
      {headadverTwo}
    </AliceCarousel>
  );
}
export default SecondHead;

