import React from "react";

import Navbar from "./components/navbar.js";
import Carousel from "./components/carousel.js"
import AsUsedBy from "./components/AsUsedBy.js"
import WorkDone from "./components/WorkDone.js"
export default (props) => {
    return  (
        <div className="container-fluid px-0" title="Hier Freelancer & Find Freelancer Jobs Online">
            <Navbar/>
            <Carousel/>
            <AsUsedBy/>
            <WorkDone/>   
        </div>
    )   

}