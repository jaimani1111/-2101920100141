import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductList from '../components/ProductList';
import { Container, Typography, TextField, Button } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Laptop');
  const [company, setCompany] = useState('AMZ');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  const loadProducts = async () => {
    const result = await fetchProducts(company, category, top, minPrice, maxPrice);
    setProducts(result);
  };

  useEffect(() => {
    loadProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Top Products</Typography>
      <div style={{ marginBottom: 20 }}>
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginRight: 16 }}
        />
        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ marginRight: 16 }}
        />
        <TextField
          label="Top N"
          type="number"
          value={top}
          onChange={(e) => setTop(e.target.value)}
          style={{ marginRight: 16 }}
        />
        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginRight: 16 }}
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginRight: 16 }}
        />
        <Button variant="contained" onClick={loadProducts}>Fetch Products</Button>
      </div>
      <ProductList products={products} />
    </Container>
  );
};

export default AllProducts;

