import React from "react";
import AliceCarousel from "react-alice-carousel";
import { hero } from "../Data/Banners";

function HeadAdvertisment() {
  const headadver = hero.map((data) => {
    
    return (
      <div id="head-advertisment">
        <div className="HeadAdvertisment">
          <div className="headTitle">
            <h1 className="headTitle"> {data.title} </h1>
            <button className="buttonShopNow"> {data.click} </button>
            <button className="viewMore"> {data.click2} </button>
          </div>
          <div>
            <img className="headImg" src={data.img} />
            <div>
              <button className="saleStiker"> {data.price} </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <AliceCarousel disableButtonsControls="true">{headadver}</AliceCarousel>
  );
}

export default HeadAdvertisment;
