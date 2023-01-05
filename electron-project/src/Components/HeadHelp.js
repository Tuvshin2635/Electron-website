import React from "react";

function HeadHelp() {
    return (
        <div className='headHelp'>
            {/* tsagaan jijig header */}
            <div className='header-first-line' >
                <div> <p> Need help? Call us: (+98) 0234 456 789 </p></div>
                <div className='header-first-line-end' >
                    <div> <p> <i class="bi bi-geo-alt"></i> <a href='#'> Our Store </a> </p> </div>
                    <div> <p><i class="bi bi-truck"></i> <a href='#'> Track your order</a></p> </div>
                </div>
            </div>

        </div>
    );
}
export default HeadHelp;
