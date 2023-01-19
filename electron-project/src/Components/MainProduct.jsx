import { mainProduct } from "../Data/Banners";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "react-simple-star-rating";

function ProductMain(props) {
  const ProductMains = mainProduct.map((data, index) => {
    const liked = props.wishList.filter((wish) => wish.id === data.id)[0];
    // console.log(liked);

    const carted = props.cartShop.filter((cart) => cart.id === data.id)[0];

    return (
      <div className="productMain">
        <div className="heartImg">
          <img src={data.thumbnail} />
          <div>
            <p>
              <a
                onClick={() => {
                  console.log("heart clicked");
                  // setLiked(!liked);

                  if (!liked) {
                    const likedProduct = {
                      id: data.id,
                      name: data.title,
                      liked: true,
                    };
                    props.setWishList([...props.wishList, likedProduct]);
                  } else {
                    props.setWishList(
                      props.wishList.filter((w) => w.id !== data.id)
                    );
                  }
                }}
              >
                {liked ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-balloon-heart"></i>
                )}
              </a>
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
              <a
                onClick={() => {
                  console.log("cart clicked");

                  if (!carted) {
                    const cartedProduct = {
                      id: data.id,
                      name: data.title,
                      // liked: true,
                    };
                    props.setCartShop([...props.cartShop, cartedProduct]);
                  } else {
                    props.setCartShop(
                      props.cartShop.filter((c) => c.id !== data.id)
                    );
                  }
                }}
              >
                <i class="bi bi-cart"></i>
              </a>
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
