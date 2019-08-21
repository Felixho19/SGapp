import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FoodReservation from './components/FoodReservation';
import Map from './components/Map';
import Seat from './components/Seat';
import Home from './components/Homepage';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QRCode } from 'react-qr-svg';
import BgImage from './components/img/login_bg.jpg';

class QRCodePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custNumber : '1',
    }
  }
  render(){
    const styles = {
      root: {
        fontFamily: 'arial',
      },
      h1: {
        textAlign: 'center',
      },
      qrcode: {
        textAlign: 'center',
      },
    };

    return(
      <div style={styles.root}>
      <h1 style={styles.h1}>Lounge Reservation</h1>
      <div style={styles.qrcode}>
        <QRCode
          level="Q"
          style={{ width: 256 }}
          value={JSON.stringify({
            firstName: "Tony",
            lastName: "Mok",
            class: "First Class",
            flight: "SQ865",
            departureTime: "18:50",
            destination: "Singapore Changi Airport (SIN)",
            number: this.state.custNumber
          })}
        />
      </div>

    </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth : false
    }
  }
  setAuth(){
    this.setState({auth:!this.state.auth});
  }
  render() {
    const styles = {
      main: {
        backgroundImage: `url(${BgImage})`,
      },
    };
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" style={styles.main}>
          <Header auth={this.state.auth} />
          <Switch>
            <Route exact path="/food"
              component={FoodReservation} />
            <Route exact path="/map"
              component={Map} />
            <Route exact path="/seat"
              component={Seat} />
            <Route exact path="/QRcode"
              component={QRCodePage} />
            <Route exact path="/login"
              component={() =>{return <Login setAuth={this.setAuth}/>}} />
            <Route component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;