import React from "react";
import {Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchCards} from "../actions";


class FreelancerCards extends React.Component{

    componentDidMount(){
        this.props.fetchCards();
    }

    render(){
        return (
            <div className="container cards">
                <div className="row">
                    {
                       this.props.cards.map((card,id)=>{
                            return(
                                <div key={id} className="col-md-6">
                                    <div className="row lhs">
                                        <div className={"col-xl-6 "+ card.imgClass}>
                                            <Image className="w-100" src={card.link}/>
                                        </div>
                                        <div className={"col-xl-6 details "+card.txt}>
                                            <span>{card.title}</span>
                                            <h3>{card.header}</h3>
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
};

const mapStateToProps=(state)=>{
    return{
        cards :state.cards
    }
}

export default connect(mapStateToProps,{fetchCards}) (FreelancerCards);