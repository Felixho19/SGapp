import React from 'react';
import {Carousel} from 'react-bootstrap';
import Navigation from './Navigation';
import ppt1 from './img/ppt1.jpg';
import ppt2 from './img/ppt2.jpg';
import ppt3 from './img/ppt3.jpg';
import 'holderjs';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const auth = this.props.location === undefined ? false : this.props.location.auth;
        return (
            <div>
            <Navigation auth={auth} />
            <Carousel>
                <Carousel.Item>
                    <img
                    height='400'
                    width='800'
                    className="d-block w-100"
                    src={ppt1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Singapore</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height='400'
                    width='800'
                    className="d-block w-100"
                    src={ppt2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Thailand</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height='400'
                    width='800'
                    className="d-block w-100"
                    src={ppt3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Cambodia</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                </div>
        );
    }
  }

  export default Home;