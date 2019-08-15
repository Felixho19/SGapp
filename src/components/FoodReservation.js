import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Form, FormControl}
   from 'react-bootstrap';
import sample from './img/sample.jpg';

const foods = [
    { 
      id : 1,
      name : "Apple",
      desc : "This is apple."
    },
    { 
      id : 2,
      name : "Banana",
      desc : "This is banana."
    },
    { 
      id : 3,
      name : "Coffee",
      desc : "This is coffee."
    },
    { 
      id : 4,
      name : "Duck",
      desc : "This is duck."
    },
    { 
      id : 5,
      name : "Duck",
      desc : "This is duck."
    },
    { 
      id : 6,
      name : "Duck",
      desc : "This is duck."
    }
  ];

class FoodReservation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cols = [];
        let items = [];
        let last_index = foods.length-1;
        foods.forEach((food, index) => {
          items.push(
          <Col xs={6}>
            <Card style={{ width: '100%' }} >
              <Card.Img src={sample} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.desc}</Card.Text>
                <Button variant="primary">Location</Button>
              </Card.Body>
            </Card>
          </Col>
          );
          if (items.length === 2 || last_index === index){
            cols.push(<Row className="justify-content-md-center">{items}</Row>);
            cols.push(<br />);
            items = [];
          } 
        });
        return (
            <Container>
            <Col xs={12}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Food Pre-ordering</Navbar.Brand>
                <Form inline>
                  <FormControl type="text" placeholder="Name of food" />
                  <Button className="text-center" variant="outline-success">Filter</Button>
                </Form>
            </Navbar>
            </Col>
            {cols}
          </Container>
        );
    }
  }

  export default FoodReservation;