import React from "react";
import {Carousel} from "react-bootstrap";

class carousel extends React.Component{
    render(){
        return (
            <div title="Hier Freelancer & Find Freelancer Jobs Online">
                <div className="header">
                <h1> Hire the best freelancers for any job, online. </h1>
                <p>Millions of people use freelancer.com to turn their ideas into reality.</p>
                <a className="one" href="/">Hier a Freelancer</a>
                <a className="two" href="/">Earn money freelancing</a>
                </div>
                <Carousel fade="true" >
                <Carousel.Item>
                    <div className="overlay">  
                        <Carousel.Caption>
                        <p >This radiation shield design for NASA cost $500 USD and took 15 days</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay">
                            <Carousel.Caption>
                            <p > This illustration cost $100 USD and took 5 days </p>
                            </Carousel.Caption>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay">
                            <Carousel.Caption>
                            <p > This radiation shield design for NASA cost $500 USD and took 15 days </p>
                            </Carousel.Caption>
                        </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="overlay">
                            <Carousel.Caption>
                            <p>This illustration cost $100 USD and took 5 days </p>
                            </Carousel.Caption>
                        </div>
                </Carousel.Item>
            </Carousel>

            </div>
            
        
            )
    }
}

export default carousel;