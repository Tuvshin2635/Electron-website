import React from "react";


function HeadAdvertisment() {
    return (
        <div className="HeadAdvertisment" >
            <div className="headTitle">
                <p> Canon <br /> camera</p>
                <div className="headButton">
                    <div className="buttonShopNow"> <button> Shop now </button>  </div>
                    <div className="viewMore"> <button>View more </button>  </div>
                </div>
            </div>
            <div>
                <img src="./images/bannerphoto00.jpg"/>
                <div className="saleStiker"> 
                    <p> only <br/> $89 </p>
                </div>
            </div>
        </div>
    );
}

export default HeadAdvertisment;