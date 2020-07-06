import React from "react";
import {Image} from "react-bootstrap";


class navbar extends React.Component{
   
    render(){
        return(
                <div className="navbar px-lg-4 px-1">
                    <div className="lhs ml-lg-4">
                    <a className="p-0" href='/'>
                        <Image src="logo.png"/>
                    </a>
                    <a className="d-none d-md-inline-block" href="/">how it works</a>
                    <a className="d-none d-md-inline-block" href="/">browse jobs</a>
                    </div>
                    <div className="rhs pr-3 pr-lg-5">
                    <a href="/">log in</a>
                    <a href="/">Sign up</a>
                    <a className="d-none d-md-inline-block post " href="/">Post a Project</a>
                    </div>
                </div>
        );

    }

}
export default navbar;