import React from 'react';
import { Card } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container m-5'>
            <Card>
  <Card.Header>Quote</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {''}
        Stay Hungry Stay Foolish {' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title"> Steve Jobs</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
        </div>
    );
};

export default Checkout;