import React from "react";
import smallBanner from "../Data/smallBanner";




export default function SmallBanner() {
    const BannerSmall = smallBanner.map((smallBanner) => {
        return (
            <BannerSmall    title={smallBanner.title} 
                            position={smallBanner.image} 
                            children={smallBanner.description} />
        )
    })

    return (
        <div>
                    {BannerSmall}

        </div>
    )
}