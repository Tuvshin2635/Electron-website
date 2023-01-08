import React from 'react';
import { brands } from '../Data/Banners';

function SponsorName() {
    const logoSponsor = brands.map((data) => {
        return (
                <div id='sponsorLogos'>
                    <img src={data.logo} />
                </div>
        )
    })
    return logoSponsor
}
export default SponsorName;

