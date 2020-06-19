import React from "react";
import {Image} from "react-bootstrap";

const WorkDone =()=>{
    return<div className="container work-done text-center px-0">
            <h2>Need work done?</h2>
            <div className="row">
                {
                    [1, 2, 3].map(key => {
                        return(
                            <div className="col-md-4">
                                <Image className=" rounded-circle w-100" src="work.jpg"/>
                                <h3>Post a job</h3>
                                <p>It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.</p>
                            </div>
                        );
                    })
                }
        </div>

    </div>
}

export default WorkDone;