import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
// import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded h-100">
      <Link to={`/user/${product.id}?name=${product.name}&&img=${product.Image}`}>
        <Card.Img height="200px" src={product.Image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/user/${product.id}?name=${product.name}&&img=${product.Image}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
