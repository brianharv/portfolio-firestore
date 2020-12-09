import firebase from "firebase/app";
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirectToHome: false
    }
  }

  handleRedirect = () => {
    this.setState({
      redirectToHome: true
    })
  }

  doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      this.handleRedirect()
    ).catch(function (error) {
      console.log(error.message);
    });
  }

  doSignOut = () => {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/"/>
    } else {
        return (
        <React.Fragment>
          <p>Sign In</p>
          <form className="form-group" onSubmit={this.doSignIn}>
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
            <p>Sign Out</p>
            <button className="btn btn-outline-dark btn-sm" onClick={this.doSignOut}>Sign Out</button>
          </form>
          <Link className="btn btn-outline-dark btn-sm" to="/">Home</Link>
        </React.Fragment>
      )
    }
  }
}

export default Signin;

