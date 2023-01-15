import { mainProduct } from "../Data/Banners";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import ModalProduct from "./Component-Detail/ModalProduct";

function ProductMain(props) {
  const handleClick = () => {
    props.setWishlist(props.wishlist + 1);
  };

  // const [cart, setCart] = useState(0);
  const handleCart = (props) => {
    console.log({ handleCart });
    props.setCartShop(props.cartShops);
    // console.log(props.CartShop);
  };

  const ProductMains = mainProduct.map((data) => {
    return (
      <div className="productMain">
        <div className="heartImg">
          <button onClick={<ModalProduct/>}> </button>
          <img src={data.thumbnail}  />
          <div>
            {" "}
            <p onClick={handleClick}>
              {" "}
              <i class="bi bi-heart-fill"></i>{" "}
            </p>
          </div>
        </div>
        <div id="ProductInfo">
          <div>
            <p className="productTitle"> {data.title}</p>
            <p className="productPrice"> {data.price}</p>
            <span></span>
          </div>
          <div>
            <p className="productCart">
              <i class="bi bi-cart" onClick={handleCart}></i>
            </p>
          </div>
        </div>
        <Rating initialValue={data.rate} />
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
