import React from "react";
import { Link } from "react-router-dom"
import firebase from 'firebase/app';

function Sidebar(){

let user = null;
if (firebase.auth().currentUser ) {
  user = "Signed in as: "+firebase.auth().currentUser.email;
}

return(
  <React.Fragment>
    <div className="sidenav">      
      <Link to="/">Home</Link>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <Link to="/signin">Log In</Link>
      <p className="signInUser">{user}</p>
    </div>
  </React.Fragment>
);
}

export default Sidebar;