import React from "react";

import Image from 'react-bootstrap/Image';
import pp from './style/assets/testimonial-1.jpg'
const Testimonial =()=>{
    return(
        <div className="container testimonial text-center py-5">
            <h2 className="my-5">What people are saying...</h2>
            <div className="row">
            {
                [1, 2, 3].map(key => {
                return (
                        <div key={key} className="col-lg-4  mb-4 mb-lg-0">
                            <Image className=" rounded-circle " src={pp}/>
                            <h5 className="mt-3">Margaret E.</h5>
                            <p>"This is fantastic! Thanks so much guys!"</p>

                        </div>
                );

            })
            }

            </div>

        </div>
    );
}


export default Testimonial;

