import React from "react";
import {Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchFeatures} from "../actions";


class Features extends React.Component{

    componentDidMount(){
        this.props.fetchFeatures();
    }

    render()
    {
        return(
            <div className="features container">
                <h2 className="text-center">What's great about it?</h2>
                <div className="row">
                {
                   this.props.items.map((item,id)=>{
                        return(
                            <div key={id} className="col-xl-4 col-md-6">
                                <Image src={item.link}/>
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
    
}

const mapStateToProps=(state)=>{
    return{
        items :state.features
    }
}

export default connect(mapStateToProps,{fetchFeatures}) (Features);