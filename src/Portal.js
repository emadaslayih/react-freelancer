import React from "react";

import MainNav from "components/MainNav";
import Masthead from "./components/Masthead";
class Portal extends React.Component {
  render() {
    return (
      <div id="react-core">
        <MainNav />
        <Masthead />
      </div>
    );
  }
}

export default Portal;
