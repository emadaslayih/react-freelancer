import React from "react";

import Navbar from "./components/navbar";
import Carousel from "./components/carousel"
import AsUsedBy from "./components/AsUsedBy"
import WorkDone from "./components/WorkDone"
import Features from "./components/Features"
import Projects from "./components/CrowdFavourites"
import Cat from "./components/Categories"
import TopJobs from "./components/TopJobs"
import FreelancerCards from "./components/FreelancerCards";
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
            <FreelancerCards/>
        </div>
    )   

}