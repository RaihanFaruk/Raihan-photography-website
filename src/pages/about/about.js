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
    <Card.Title>[ Very Special Photographer In Whole World ] </Card.Title>
    <Card.Text>
    This Photo Clicking By Md Fajle Rabbe Talha She Very HardFull Work For Shoccho Tour & Travels
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
