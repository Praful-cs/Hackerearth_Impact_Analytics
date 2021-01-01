import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const ShortListScreen = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.keyword || '';
  const [keyWord, setkeyWord] = useState(keyword);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSeacrhProducts] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('shortList') || '[]');
    setProducts(list);
    if (keyword) {
      const arr = products.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()) && item);
      setSeacrhProducts(arr);
      setkeyWord(keyword);
    }
  }, [dispatch, keyword]);

  return (
    <>
      <>
        <Row>
          {
            searchProducts && searchProducts.length ?
              searchProducts.map((product) => (
                <Col className="mb-5" key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product
                    product={product}
                    keyword={keyWord}
                  />
                </Col>
              )) :
              products.map((product) => (
                <Col className="mb-5" key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product
                    product={product}
                    keyword={keyWord}
                  />
                </Col>
              ))
          }
        </Row>
      </>
    </>
  );
};

export default ShortListScreen;
