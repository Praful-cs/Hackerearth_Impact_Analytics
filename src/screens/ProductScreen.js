import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

const ProductScreen = ({ history, match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = {};
    let url = new URL(window.location.href);
    let searchParams = new URLSearchParams(url.search);
    product.name = searchParams.get('name');
    product.Image = searchParams.get('img');
    product.id = match.params.id;
    setProduct(product);
  }, []);

  const shortListHandler = (id) => {
    const shortList = JSON.parse(localStorage.getItem('shortList') || '[]');
    const rejectList = JSON.parse(localStorage.getItem('rejectList') || '[]');
    const rejectListObj = rejectList.find(item => item.id === id);
    const shortListObj = shortList.find(item => item.id === id);
    if (!shortListObj) {
      shortList.push(product);
    }
    if (rejectListObj && rejectListObj.id) {
      const arr = rejectList.filter(function(obj) {
        return obj.id !== rejectListObj.id;
      });
      localStorage.setItem('rejectList', JSON.stringify(arr));
    }
    localStorage.setItem('shortList', JSON.stringify(shortList));
  };

  const rejectHandler = (id) => {
    const rejectList = JSON.parse(localStorage.getItem('rejectList') || '[]');
    const shortList = JSON.parse(localStorage.getItem('shortList') || '[]');
    const rejectListObj = rejectList.find(item => item.id === id);
    const shortListObj = shortList.find(item => item.id === id);
    if (!rejectListObj) {
      rejectList.push(product);
    }
    if (shortListObj && shortListObj.id) {
      const arr = shortList.filter(function(obj) {
        return obj.id !== shortListObj.id;
      });
      localStorage.setItem('shortList', JSON.stringify(arr));
    }
    localStorage.setItem('rejectList', JSON.stringify(rejectList));
  };

  return (
    <>
      <button className="btn btn-dark my-3" onClick={history.goBack}>
        Go Back
      </button>
      <Row>
        <Col md={6}>
          <Image src={product.Image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="success"
                className="btn-block"
                type="button"
                onClick={() => shortListHandler(product.id)}
              >
                Shortlist
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant="danger"
                className="btn-block"
                type="button"
                onClick={() => rejectHandler(product.id)}
              >
                Reject
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
