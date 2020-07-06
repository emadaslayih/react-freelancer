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
                {
                    this.props.carouselImages.map((item,id)=>{
                        return (
                        <div className="header">
                            {item.captionTitle && <h1> {item.captionTitle} </h1>}
                            {item.captionDescription && <p>{item.captionDescription}</p>}
                            {item.hierBtn && <a className="one" href="/">{item.hierBtn}</a>}
                            {item.earnBtn && <a className="two" href="/">{item.earnBtn}</a>}
                        </div>
                        )
                    })
                }
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