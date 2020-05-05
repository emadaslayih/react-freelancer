import React from "react";

import MainNav from "components/MainNav";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Details from "./components/Details";
import Testimonial from "./components/Testimonial";
class Portal extends React.Component {
  render() {
    return (
      <div id="react-core">
        <MainNav />
        <Masthead />
        <Features/>
        <Details/>
        <Testimonial/>
      </div>
    );
  }
}

export default Portal;
