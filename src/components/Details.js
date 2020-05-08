import React from "react";
import CardBGImage from "./style/assets/bg-details-1.jpg";

const Details =()=>{

    const items = [
        {image: CardBGImage, title: "Main Text", description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},
        {image: CardBGImage, title: "Main Text", description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},
        {image: CardBGImage, title: "Main Text", description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"},
    ]

    return(
       <div className="container-fluid details">
           {
                items.map((item ,key) => {
                    let imgClass = "order-lg-1"
                    if((key % 2 !== 0) && imgClass === "order-lg-1") {imgClass = ""}
                    return (
                        <div key={key} className="row">
                            <div className={"col-lg-6 img-side " + imgClass} style = {{backgroundImage: `url(${item.image})`}} />
                            <div className="col-lg-6 details-side my-auto">
                                <h2>{item.title}</h2>
                                <p className="mb-0">{item.description}</p>
                            </div>
                        </div>
                    )
                })
           }
       </div>
    );
}

export default Details;