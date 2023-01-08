import React from "react";

function FooterProduct() {
    return (
        <div className="footPro">

            <div className="footProductContainer">
                <div className="footerProduct">
                    <div>
                        <img src="images/product09.jpg" />
                    </div>
                    <div id="footerProduct">
                        <h1 className="titleFooterProduct"> JBL bar 2.1 deep bass </h1>
                        <p className="priceFooterProduct"> $11,70</p>
                        <button id="footerProductBtn"> Add to Cart <i class="bi bi-cart"></i> </button>
                    </div>
                </div>
                <div className="footProduct02">
                    <div className="footPro001">
                        <div>
                            <img src="images/product10.jpg" />
                        </div>
                        <div className="footText01">
                            <h1> Play game</h1>
                            <p> $11,70</p>
                        </div>
                    </div>
                    <div className="footPro002">
                        <div>
                            <img src="images/product03.jpg" />
                        </div>
                        <div className="footText02">
                            <h1> Play game</h1>
                            <p> $11,70</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footDelivery">
                <div id="delivery">
                    <div>
                        <span> <i class="bi bi-box2-heart-fill"></i> </span>
                    </div>
                    <div>
                        <h1> Free delivery </h1>
                        <h3> on order above $50,00</h3>
                    </div>
                </div>
                <div id="quality">
                    <div>
                        <span> <i class="bi bi-box-fill"></i> </span>
                    </div>
                    <div>
                        <h1> Best quality  </h1>
                        <h3> best quality in low price</h3>
                    </div>
                </div>
                <div id="waranty">
                    <div>
                        <span> <i class="bi bi-house-lock-fill"></i> </span>
                    </div>
                    <div>
                        <h1> 1 year warranty </h1>
                        <h3> Avaliable warranty</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default FooterProduct;
