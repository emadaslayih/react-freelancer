import React from "react";
import{Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchCrowdFav} from "../actions";

class Projects extends React.Component{

    componentDidMount(){
        this.props.fetchCrowdFav();
    }
    render(){
        return(
            <div className="proj bg-light ">
                <div className="container">
                    <h2>Crowd favorites</h2>
                    <h2>Here are some of our most popular projects:</h2>
                    <div className="row">
                        {
                            this.props.cards.map((card,id)=>{
                                return(
                                    <div key={id} className="col-lg-4 col-md-6" title={card.title}>
                                        <div className="st">  
                                            <Image className="w-100" src={card.link}/>
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
    
};
const mapStateToProps=(state)=>{
    return{
        cards :state.favourite
    }
}


export default connect(mapStateToProps,{fetchCrowdFav})(Projects);