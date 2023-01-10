import { mainProduct } from "../Data/Banners";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";


function ProductMain() {

function HandleUPVote (data) {
    setVotes(votes +1 )
      if (stars > 5) {
        setStars(0)
      } else {
        setStars(stars +1)
      }
  }


  const ProductMains = mainProduct.map((data) => {
    return (
      <div className="productMain">
        <img
          // onClick={() => {
          //   HandleUpVote(data);
          // }}
          src={data.thumbnail}
        />
        <div id="ProductInfo">
          <div>
            <p className="productTitle"> {data.title}</p>
            <p className="productPrice"> {data.price}</p>
            <span onClick={HandleUPVote}>
              {" "}
              <i id="starUp" class="bi bi-caret-up"></i>{" "}
            </span>
            <span>
              {" "}
              <i id="stardown" class="bi bi-caret-down-fill"></i>{" "}
            </span>
          </div>
          <div>
            <p className="productCart">
              <i class="bi bi-cart"></i>{" "}
            </p>
          </div>
        </div>
        <Rating
          initialValue={data.rate}
        />
      </div>
    );
  });
  return (
    <AliceCarousel
      responsive={{
        1024: { items: 4 },
      }}
    >
      {ProductMains}
    </AliceCarousel>
  );
}
export default ProductMain;
