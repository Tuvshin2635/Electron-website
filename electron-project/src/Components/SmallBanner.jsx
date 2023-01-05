import React from "react";
import banners from "../Data/Banners";

const HeadBanner = () => {
    return (
        <div>
            {banners.map((banner) => (
                <div
                    title={banner.title}
                    
                    />
            ))}
        </div>
    )
}
export default HeadBanner;


// var numbers = [1, 2, 3, 4, 5];   
// const doubleValue = numbers.map((number)=>{   
//     return (number * 2);   
// });   