import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register.js';
import FirstApprover from './components/FirstApprover.js';
import SecondApprover from './components/SecondApprover';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/register"
              component={Register} />
            <Route exact path="/firstApprover"
              component={FirstApprover} />
            <Route exact path="/secondApprover"
              component={SecondApprover} />
            <Route component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;