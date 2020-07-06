import React from "react";
import {Carousel} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchCarousel} from "../actions"

class carousel extends React.Component{
    
    componentDidMount(){
        this.props.fetchCarousel();
    }

    render(){
        return (
            <div>
                <div className="header">
                <h1> Hire the best freelancers for any job, online. </h1>
                <p>Millions of people use freelancer.com to turn their ideas into reality.</p>
                <a className="one" href="/">Hier a Freelancer</a>
                <a className="two" href="/">Earn money freelancing</a>
                </div>
                <Carousel fade="true" >
                { 
                this.props.carouselImages.map((item,id)=>{
                    return(
                        <Carousel.Item key={id} style={{background: `url(${item.image}) center` , backgroundSize:"cover"}}>
                            <div className="overlay">  
                                <Carousel.Caption>
                                    <p>{item.details}</p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    );
                })
                }
            </Carousel>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        carouselImages: state.carousel,
    }
}

export default connect (mapStateToProps, {fetchCarousel}) (carousel);