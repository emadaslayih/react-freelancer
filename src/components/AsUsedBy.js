import React from "react";
import{Image} from "react-bootstrap";


const AsUsedBy =()=>{
    return(
    <div className="container px-0 mx-0">
        <div className="row main-row m-0">
            <div className=" column-1 text-center ">
              <span>As used by</span>
            </div>
            <div className=" column-2 ">
                <div className="row m-0">
                    <div className="col-md-2 col-4">
                        <Image src="ms.png"/>
                    </div>
                    <div className="col-md-1 col-2">
                        <Image src="SAP.png"/>
                    </div>
                    <div className="col-md-2 col-4">
                        <Image src="metlife-1.svg"/>
                    </div>
                    <div className="col-md-1 col-2">
                        <Image src="intel.png"/>
                    </div>
                    <div className="col-md-2 col-4">
                        <Image src="be.png"/>
                    </div>
                    <div className="col-md-2 col-4">
                        <Image src="avery.png"/>
                    </div>
                    <div className="col-md-1 col-2">
                        <Image src="pwc.png"/>
                    </div>
                    <div className="col-md-1 col-2">
                        <Image src="ge.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AsUsedBy;