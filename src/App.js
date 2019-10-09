import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register.js';
import FirstApprover from './components/FirstApprover.js';
import SecondApprover from './components/SecondApprover';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path="/register"
              component={Register} />
            <Route exact path="/firstApprover"
              component={FirstApprover} />
            <Route exact path="/secondApprover"
              component={SecondApprover} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;