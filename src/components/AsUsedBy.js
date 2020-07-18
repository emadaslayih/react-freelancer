import React from "react";
import{Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchAsUsedBy} from "../actions"

class AsUsedBy extends React.Component {

    componentDidMount(){
        this.props.fetchAsUsedBy();
    }
    
    render(){
        return(
            <div className="container used-by px-0 mx-0">
                <div className="row main-row m-0">
                    <div className=" column-1 text-center ">
                      <span>As used by</span>
                    </div>
                    <div className=" column-2 ">
                        <div className="row m-0">
                    {    this.props.asUsedBy.map((image,id)=>{
                            return(
                                <div key={id} className={image.class}>
                                    <Image src={image.image}/>
                                </div>
                            );
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
            );

    }
    
}
const mapStateToProps = (state) => {
    return {
        asUsedBy: state.usedBy
    }
}

export default connect(mapStateToProps,{fetchAsUsedBy}) (AsUsedBy);