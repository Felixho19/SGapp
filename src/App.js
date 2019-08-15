import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FoodReservation from './components/FoodReservation';
import Map from './components/Map';
import Seat from './components/Seat';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

class QRCode extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(<div></div>);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <Route exact path="/foodReservation"
            component={FoodReservation} />
          <Route exact path="/map"
            component={Map} />
          <Route exact path="/seat"
            component={Seat} />
          <Route exact path="/QRcode/:hash"
            component={QRCode} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;