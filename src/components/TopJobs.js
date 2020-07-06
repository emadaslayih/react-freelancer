import React from "react";
import {connect} from "react-redux";
import {fetchTopJob} from "../actions";

class TopJobs extends React.Component{
    componentDidMount(){
        this.props.fetchTopJob();
    }
    render(){
        return (
            <div className="container top-job py-5">
                <h2 className="text-center">Browse top job categories</h2>
                <div className="row mx-0">
                    {
                        this.props.job.map((job,id)=>{
                            return(
                                <div key={id} className="job">
                                    <i className="fas fa-caret-right"></i>
                                    <a href="/">{job.name}</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
};
const mapStateToProps=(state)=>{
    return{
        job:state.topJob
    }
}

export default connect(mapStateToProps,{fetchTopJob}) (TopJobs);