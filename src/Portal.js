import React from "react";
import {Router,Route,Switch} from 'react-router-dom';

import Navbar from "./components/navbar.js";

export default (props) => {
    return  (
        <div className="container-fluid px-0">
            <Navbar/>   
        </div>
    )   

}