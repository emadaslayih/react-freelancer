import React from "react";
import {Image} from "react-bootstrap";

const items=[
    {
        img:"f1.png" ,
        title:"Browse portfolios",
        desc: "Find professionals you can trust by browsing their samples of previous work and reading their profile reviews."
    },
    {
        img:"f2.png" ,
        title: "View bids",
        desc: "Receive free bids from our talented freelancers within seconds."
    },
    {
        img:"f3.png" ,
        title: "Live chat",
        desc: "You can live chat with your freelancers to get constant updates on the progress of your work."
    },
    {
        img:"f4.png" ,
        title: "Pay for quality",
        desc: "Pay for work when it has been completed and you're 100% satisfied."
    },
    {
        img:"f5.png" ,
        title: "Track progress",
        desc: "Keep up-to-date and on-the-go with our time tracker, and mobile app."
    },
    {
        img:"f6.png" ,
        title: "24/7 support",
        desc: "We're always here to help. Our support consists of real people who are available 24/7."
    } 
]

const Features=()=>{
    return(
        <div className="features container">
            <h2 className="text-center">What's great about it?</h2>
            <div className="row">
            {
                items.map((item,i)=>{
                    return(
                        <div key={i} className="col-xl-4 col-md-6">
                            <Image src={item.img}/>
                            <h3 className="d-inline-block">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default Features;