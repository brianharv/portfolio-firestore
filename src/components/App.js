import React from 'react';
import Sidebar from './Sidebar';
import WorkControl from './WorkControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Sidebar/>
      <div className="main">
      <Switch>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route patch="/">
          <WorkControl/>
          </Route>  
      </Switch>
      </div>
    </Router>
  )
}

export default App;
