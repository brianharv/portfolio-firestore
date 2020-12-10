import React from "react";
import { Link } from "react-router-dom"
import firebase from 'firebase/app';

function Sidebar(){

let user = "NOBODY!"
if (firebase.auth().currentUser ) {
  user = firebase.auth().currentUser.email
}

return(
  <React.Fragment>
    <div className="sidenav">      
      <Link to="/">Home</Link>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <Link to="/signin">Sign In</Link>
      <p> Signed in as: <br></br> {user}</p>
    </div>
  </React.Fragment>
);
}

export default Sidebar;