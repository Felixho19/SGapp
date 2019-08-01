import React from 'react';
import {
  Accordion, Breadcrumb, ListGroup, Container, Row, Col, Card, 
  Button, Navbar, Form, FormControl, Badge}
   from 'react-bootstrap';
import sample from './img/sample.jpg';

class Bread extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
  let baritems = [];
  this.props.list_dir.forEach((element, index) => {
      (index !== this.props.list_dir.length - 1 ? 
          baritems.push(<Breadcrumb.Item onClick={this.props.onChange.bind(this,element)}>{element}</Breadcrumb.Item>) : 
          baritems.push(<Breadcrumb.Item active>{element}</Breadcrumb.Item>));
  });
  return (
      <Breadcrumb>
          {baritems}
      </Breadcrumb>
  );
}
}

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

class Trolley extends React.Component {
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
      <Navbar.Brand href="#home">Lounge Food Pre-ordering</Navbar.Brand>
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

class Buffet extends React.Component {
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
      <Navbar.Brand href="#home">Lounge Food List</Navbar.Brand>
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

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_dir : ["Home"], // Current = list_dir[list_dir.length - 1]
      list_option : ["Food", "Seat"],
      food_option : ["Trolley", "Buffet"],
      seat_option : ["Booking"]
    };
  }
  onChange(child){
    if (child !== "Home") {
      this.setState({list_dir : [...this.state.list_dir, child]})
    }else{
      this.setState({list_dir : ["Home"]})
    };
  }
  render() {
    let current = this.state.list_dir[this.state.list_dir.length-1];
    let baritems = [];
    this.state.list_option.forEach((element, index) => {
    if(element === "Food"){
      let fooditems = [];
      this.state.food_option.forEach((element) => {
        fooditems.push(<ListGroup.Item action={true} onClick={this.onChange.bind(this, element)}>{element}</ListGroup.Item>);
      });
      baritems.push(<Accordion.Toggle className="d-flex justify-content-center" as={Card.Header} variant="link" eventKey={index}>{element}</Accordion.Toggle>);
      baritems.push(<Accordion.Collapse eventKey={index}><ListGroup>{fooditems}</ListGroup></Accordion.Collapse>);
    }else if(element === "Seat"){
      let seatitems = [];
      this.state.seat_option.forEach((element) => {
        seatitems.push(<ListGroup.Item action={true} onClick={this.onChange.bind(this, element)}>{element}</ListGroup.Item>);
      });
      baritems.push(<Accordion.Toggle className="d-flex justify-content-center" as={Card.Header} variant="link" eventKey={index}>{element}</Accordion.Toggle>);
      baritems.push(<Accordion.Collapse eventKey={index}><ListGroup>{seatitems}</ListGroup></Accordion.Collapse>);
    }else{
      baritems.push(<Accordion.Toggle className="d-flex justify-content-center" as={Card.Header} variant="link" eventKey={index}>{element}</Accordion.Toggle>);
    }});
    return (
      <div>
        <Bread list_dir={this.state.list_dir} onChange={this.onChange.bind(this)} />
        {current === "Home" ?
        <div>
          <Badge className="d-flex justify-content-center" variant="secondary"><h5>Lounge Service</h5></Badge>
          <Accordion><Card>{baritems}</Card></Accordion>
        </div>
        : null}
        {current === "Trolley" ? <Trolley /> : null}
        {current === "Buffet" ? <Buffet /> : null}
      </div>
    );
  }
}

export default Content;