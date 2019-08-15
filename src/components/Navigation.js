import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
                <Navbar.Brand as={Link} to="/">Lounge Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/foodReservation">Order Food</Nav.Link>
                        <Nav.Link as={Link} to="/map">Map</Nav.Link>
                        <Nav.Link as={Link} to="/seat">Seat</Nav.Link>
                        <Nav.Link as={Link} to="/QRcode">Order information (debug)</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
  }

  export default Navigation;