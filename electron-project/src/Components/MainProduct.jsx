import { mainProduct } from "../Data/Banners";
import AliceCarousel from "react-alice-carousel";
import { Rating } from "react-simple-star-rating";
import { ShopContext } from "../links/shop-context";
import { useContext } from "react";

function ProductMain(props) {
  // const { id, thumbnail, title, price } = props.data;
  // const {addToCart} = useContext(ShopContext);

  const ProductMains = mainProduct.map((data, index) => {
    const liked = props.wishList.filter((wish) => wish.id === data.id)[0];
    // console.log(liked);

    // const carted = props.cartShop.filter((cart) => cart.id === data.id)[0];

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
                  <i className="bi bi-heart"></i>
                )}
              </a>
            </p>
          </div>
        </div>
        <div id="ProductInfo">
          <div>
            <p className="productTitle"> {data.title}</p>
            <p className="productPrice"> {data.price}</p>
          </div>
          <div>
            <p className="productCart">
              <a
              // onClick={() => addToCart(data.id)}
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
