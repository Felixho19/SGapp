import React from 'react';
import {Navbar} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Navbar sticky="bottom" bg="dark" variant="dark">
        <Navbar.Brand className="text-center">SeeFu @ 2019</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;