import { mainProduct } from "../Data/Banners";
import AliceCarousel from "react-alice-carousel";
import HandleUpVote from "./HandleUPVote";

function ProductMain() {
  const ProductMains = mainProduct.map((data) => {
    return (
      <div className="productMain">
        <img
          onClick={() => {
            HandleUpVote(data);
          }}
          src={data.thumbnail}
        />
        <p> {data.title}</p>
        <p> {data.price}</p>
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
