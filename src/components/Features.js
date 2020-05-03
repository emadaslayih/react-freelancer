import React from "react";

const Features=()=>{

    return(
        <div className="container text-center features py-5">
            <div className="row py-5">
                <div className="col-lg-4">
                    <div className="feature m-auto">
                        <i className="fas fa-desktop text-primary py-5"></i>
                        <h3>Fully Responsive</h3>
                        <p>This theme will look great on any device, no matter the size!</p>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="feature m-auto">
                        <i className="fas fa-layer-group text-primary py-5"></i>
                        <h3>Bootstrap 4 Ready</h3>
                        <p>Featuring the latest build of the new Bootstrap 4 framework!</p>
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="feature m-auto">
                        <i className="far fa-check-circle text-primary py-5"></i>
                        <h3>Easy to Use</h3>
                        <p>Ready to use with your own content, or customize the source files!</p>
                    </div>
                </div>
            </div>
        </div>

    );

}

export  default Features;