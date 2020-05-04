import React from "react";

const Details =()=>{

    return(
       <div className="container-fluid details">
           {
                [1, 2, 3].map(key => {
                    let imgClass = "order-lg-1"
                    if(key === 2 && imgClass === "order-lg-1") {imgClass = ""}
                    return (
                        <div key={key} className="row">
                            <div className={"col-lg-6 img-side " + imgClass}></div>
                            <div className="col-lg-6 details-side my-auto">
                                <h2>Fully Responsive Design</h2>
                                <p className="mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device,
                                    whether it's a phone, tablet, or desktop the page will behave responsively!
                                </p>
                            </div>
                        </div>
                    )
                })
           }
       </div>
    );
}

export default Details;