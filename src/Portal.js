import React from "react";

import MainNav from "components/MainNav";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Details from "./components/Details";
import Testimonial from "./components/Testimonial";
import SearchBar from "./components/SearchBar";
import Footer from "./components/footer";
class Portal extends React.Component {


  render() {
    return (
      <div id="react-core">
        <MainNav />
        <Masthead />
        <Features/>
        <Details/>
        <Testimonial/>
        <Footer/>
      </div>
    );
  }
}

export default Portal;
