import React from "react";
import smallBanner from "../Data/smallBanner";

export default function TopBanner() {
    const TopBanner = smallBanner.map((product) =>{
        return <smallBanner
            title= {product.title}
            // image= {product.image}
            // description= {product.description}
        />
    } )
}
