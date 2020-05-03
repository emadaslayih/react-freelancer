import React from "react";

import { Button } from "react-bootstrap";

class MainNav extends React.Component{
    render()
    {
        return (
			<div className="container">
			   <div className="navbar">
					<div className="logo">
						<a href="#">react core</a>
					</div>
					<div className="sign-in ml-auto">
						<Button>sign in</Button>
					</div>
			   </div>
		    </div>
        );
    }
};

export default MainNav;