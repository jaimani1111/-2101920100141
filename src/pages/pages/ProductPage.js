import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { Container } from '@mui/material';

const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <Container>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <div>No product details available</div>
      )}
    </Container>
  );
};

export default ProductPage;
