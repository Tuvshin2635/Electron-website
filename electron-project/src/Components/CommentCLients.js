import React from 'react';
import { commentClient } from '../Data/Banners';
import AliceCarousel from "react-alice-carousel";


function CommentClient() {
    const ClientComments = commentClient.map((data) => {
        return (
            <div>
                <div className='comment'>
                    <div id='commentBox'>
                        <div className='commentNameAvatar'>
                            <img src={data.avatar} />
                            <div> <p> {data.title} </p> </div>
                        </div>
                        <div className='commentDescription'>
                            <p> {data.description} </p>
                        </div>
                    </div>
                </div>
            </div >
        )
    })
    return (
        <AliceCarousel 
            responsive={{
                1024: { items: 3 },
            }}
        >{ClientComments}
        </AliceCarousel>
    )

}

export default CommentClient;

// disableButtonsControls="false"