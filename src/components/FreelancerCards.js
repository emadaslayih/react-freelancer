import React from "react";
import {Image} from "react-bootstrap";

const cards=[
    {
        img:"fc.jpg" ,
        span:"FREELANCER API",
        title: "43 million professionals on demand",
        desc:"Why hire people when you can simply integrate our talented cloud workforce instead?",
        btn:"view documentation"
    },
    {
        img:"fc.jpg" ,
        span:"FREELANCER ENTERPRISE",
        title: "Company budget? Get more done for less",
        desc:"Use our workforce of 43 million to help your business achieve more.",
        btn:"contact us"
    }
]

const FreelancerCards =()=>{
    return (
        <div className="container cards">
            <div className="row">
                {
                    cards.map((card,i)=>{
                        let imgClass = "order-xl-2"
                        let txt="text-xl-right"
                        if(i === 0 && imgClass === "order-xl-2") {imgClass = "" }
                        if(i === 1 && txt=== "text-xl-right") {txt = "" }
                        return(
                            <div key={i} className="col-md-6">
                                <div className="row lhs">
                                    <div className={"col-xl-6 "+ imgClass}>
                                        <Image className="w-100" src={card.img}/>
                                    </div>
                                    <div className={"col-xl-6 details "+txt}>
                                        <span>{card.span}</span>
                                        <h3>{card.title}</h3>
                                        <p>{card.desc}</p>
                                        <a href="/" className="d-none d-xl-inline-block">{card.btn}</a>
                                    </div>
                                </div>
                </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default FreelancerCards;