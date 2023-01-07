import React from "react";
import { genre } from "../Data/Banners";

function ProductBar() {
    const barProduct = genre.map((data) => {
        return (
            <div className="productBar">
                <button > {data.title}</button>
            </div>
        )
    })
    return barProduct
};

export default ProductBar;
