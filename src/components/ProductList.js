import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product, index) => (
        <Card key={index} style={{ margin: 16, width: 300 }}>
          <CardMedia
            component="img"
            alt="Product Image"
            height="140"
            image={`https://via.placeholder.com/300x140?text=Product+${index+1}`}
          />
          <CardContent>
            <Typography variant="h6">{product.productName}</Typography>
            <Typography color="textSecondary">Price: ${product.price}</Typography>
            <Typography color="textSecondary">Rating: {product.rating}</Typography>
            <Typography color="textSecondary">Discount: {product.discount}%</Typography>
            <Typography color="textSecondary">Availability: {product.availability}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
