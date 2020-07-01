import React from "react";
import{Image} from "react-bootstrap";

const cards=[
        {
        img:"work2.jpg" ,
        title:"Website Development",
        desc: "From $300 USD",
        lable:"Post a project like this"
    },
    {
        img:"work2.jpg" ,
        title:"Graphic design",
        desc: "From $100 USD",
        lable:"Post a project like this"
    },
    {
        img:"work2.jpg" ,
        title:"Logo Design",
        desc: "From $50 USD",
        lable:"Post a contest like this"
    },
    {
        img:"work2.jpg" ,
        title:"Marketing",
        desc: "From $150 USD",
        lable:"Post a project like this"
    },
    {
        img:"work2.jpg" ,
        title:"Writing",
        desc: "From $50 USD",
        lable:"Post a project like this"
    },
    {
        img:"work2.jpg" ,
        title:"Mobile App",
        desc: "From $50 USD/hour",
        lable:"Post a project like this"
    }
]

const Projects =()=>{
    return(
        <div className="proj bg-light ">
            <div className="container">
                <h2>Crowd favorites</h2>
                <h2>Here are some of our most popular projects:</h2>
                <div className="row">
                    {
                        cards.map((card,i)=>{
                            return(
                                <div key={i} className="col-lg-4 col-md-6" title={card.title}>
                                    <div className="st">  
                                        <Image className="w-100" src="work2.jpg"/>
                                        <div className="overlap">
                                            <span>{card.lable}</span>
                                        </div>
                                    </div>
                                    <h3>{card.title}</h3>
                                    <span>{card.desc}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;