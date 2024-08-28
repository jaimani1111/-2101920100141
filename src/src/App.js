import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';
import { Container, Button } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <nav style={{ margin: '20px 0' }}>
          <Button variant="contained" component={Link} to="/">All Products</Button>
        </nav>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
