import React from "react";

import { Button } from "react-bootstrap";

class MainNav extends React.Component{
    render()
    {
        return (
            <div className="navbar bg-light">
                <div className='container '>
                    <div className="logo">
                        <a href="#">react core</a>
                    </div>
                    <div className="sign-in ml auto ">
                        <Button className="primary">sign in</Button>
                    </div>
                </div>
            </div>

        );
    }

};

export default MainNav;