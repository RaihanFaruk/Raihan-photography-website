import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Portfolio from '../../images/Portfolio/port.jpg'
import css from './about.css'

const About = () => {
    return (
        <div>
            <Card className="text-center">
  <Card.Header>Im Raihanuzaman Faruk</Card.Header>
  <Card.Body>
    <Card.Title>Very Special Photographer In Whole World </Card.Title>
    <Card.Text>
    Photographers record events and tells stories using images. They take pictures of people, places, events, and objects. Photographers often specialize in a type of photography. Portrait photographers take pictures of people in studios or on-site at various locations
    </Card.Text>
    <img src={Portfolio} className="card-img-top portF" alt=""/>
    <br />
    <Button variant="danger mt-2">Click With Me </Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    );
};

export default About;
