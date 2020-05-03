import React from "react";

import MainNav from "components/MainNav";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
class Portal extends React.Component {
  render() {
    return (
      <div id="react-core">
        <MainNav />
        <Masthead />
        <Features/>
      </div>
    );
  }
}

export default Portal;
