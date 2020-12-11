import React from 'react';
// import Sidebar from './Sidebar';
import WorkControl from './WorkControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      {/* <Sidebar/> */}
      
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <WorkControl/>
          </Route>  
      </Switch>
    </Router>
  )
}

export default App;
