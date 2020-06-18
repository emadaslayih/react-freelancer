import React from "react";

import Navbar from "./components/navbar.js";
import Carousel from "./components/carousel.js"
export default (props) => {
    return  (
        <div className="container-fluid px-0">
            <Navbar/>
            <Carousel/>   

        </div>
    )   

}