import firebase from "firebase/app";
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from "./Sidebar";


function Signin() {

  const [redirect, handleRedirect] = useState(false)

  const handleRedirectChange = () => (handleRedirect(!redirect))

  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(
        handleRedirectChange
      ).catch(function (error) {
        console.log(error.message);
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      alert("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

    if (redirect) {
      return <Redirect to="/"/>
    } else {
        return (
          <React.Fragment>
            <Sidebar/>
            <div className="main">
              <div className="row">
                <div className="col-sm">
                  <form className="form-group mt-4" onSubmit={doSignIn}>
                    <input
                      className="form-control"
                      type='text'
                      name='signinEmail'
                      placeholder='email' />
                    <input
                      className="form-control"
                      type='password'
                      name='signinPassword'
                      placeholder='Password' />
                    <button className="btn btn-outline-dark btn-sm btn-block" type='submit'>Sign In</button>
                  </form>
          
                  <button className="btn btn-outline-dark btn-block btn-sm mb-2" onClick={doSignOut}>Sign Out</button>
                  <Link className="btn btn-outline-dark btn-block btn-sm" to="/"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                    </Link>
                </div>
              <div className="col-sm"></div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }

export default Signin;
