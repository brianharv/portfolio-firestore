import firebase from "firebase/app";
import React from 'react';

function Signin(){

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Sensei, I have logged you in. Be well.");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  
  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password'/>
        <button type='submit'>Sign In</button>  
       <h1>Sign Out</h1> 
       <button onClick={doSignOut}>Sign Out</button>
      </form>
    </React.Fragment>
  )
}

export default Signin;

