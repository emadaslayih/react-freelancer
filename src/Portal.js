import React from "react";

import Navbar from "./components/navbar.js";
import Carousel from "./components/carousel.js"
import AsUsedBy from "./components/AsUsedBy.js"
import WorkDone from "./components/WorkDone.js"
import Features from "./components/Features.js"
import Projects from "./components/CrowdFavourites"
import Cat from "./components/Categories"
import TopJobs from "./components/TopJobs"
export default (props) => {
    return  (
        <div className="container-fluid px-0" title="Hier Freelancer & Find Freelancer Jobs Online">
            <Navbar/>
            <Carousel/>
            <AsUsedBy/>
            <WorkDone/> 
            <Features/> 
            <Projects/> 
            <Cat/>
            <TopJobs/>
        </div>
    )   

}