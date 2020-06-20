import React from "react";
import {Image} from "react-bootstrap";
const step=[
    {
        img:"work.jpg" ,
        title:"Post a job",
        desc: "It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes."
    },
    {
        img:"work2.jpg" ,
        title: "Choose freelancers",
        desc: "Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more)."
    },
    {
        img:"work3.jpg" ,
        title: "Pay safely",
        desc: "With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online."
    } 
]

const WorkDone =()=>{
    return<div className="container work-done text-center px-0">
            <h2>Need work done?</h2>
            <div className="row">
                {
                    step.map((step,i) => {
                        return(
                            <div key={i} className="col-md-4">
                                <Image className=" rounded-circle w-100" src={step.img}/>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        );
                    })
                }
        </div>

    </div>
}

export default WorkDone;