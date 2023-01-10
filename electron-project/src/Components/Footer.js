import React from "react";

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="footerWhiteParts">
                {/* <p className="sentBtn"> <i class="bi bi-send"></i> </p> */}
                <h1> Subscribe newsletter</h1>
                <input placeholder=" Email Address"/>
                <p id="hearBtn"> <i class="bi bi-headset"></i> Call us 24/7 : <br/> (+62) 0123 567 789</p>
            </div>
        </div>
    )
}
export default Footer;

