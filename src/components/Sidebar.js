import React from "react";
import { Link } from "react-router-dom"

function Sidebar(){
return(
  <React.Fragment>
    <div class="sidenav">
      <Link to="/">Home</Link>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <Link to="/signin">Sign In</Link>
    </div>
  </React.Fragment>
);
}

export default Sidebar;