import { footerData } from "../Data/Banners"

export default function FooterSecond () {  
    const footerSecondPart = footerData.map((data) =>{
        return (
            <div className="footerpart3">
                <h1> {data.title} </h1>
                <ul>
                    <li>{data.title01}</li>
                    <li>{data.title02}</li>
                    <li>{data.title03}</li>
                    <li>{data.title04}</li>
                    <li>{data.title05}</li>
                </ul>
            </div>
        )
    })
    return footerSecondPart
}
