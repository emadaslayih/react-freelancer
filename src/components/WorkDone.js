import React from "react";
import {Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchWorkDone} from "../actions";


class WorkDone extends React.Component{ 
    
    componentDidMount(){
        this.props.fetchWorkDone();
    }
    render(){
        return(
            <div className="container work-done text-center px-0">
                <h2>Need work done?</h2>
                <div className="row">
                    {
                        this.props.steps.map((step,id) => {
                            return(
                                <div key={id} className="col-md-4">
                                    <Image className=" rounded-circle w-100" src={step.image}/>
                                    <h3>{step.title}</h3>
                                    <p>{step.paragraph}</p>
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
        steps :state.workDone
    }

}

export default connect(mapStateToProps,{fetchWorkDone}) (WorkDone);