import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <Card style={{ margin: 16 }}>
      <CardMedia
        component="img"
        alt="Product Image"
        height="300"
        image={`https://via.placeholder.com/600x300?text=Product+Image`}
      />
      <CardContent>
        <Typography variant="h4">{product.productName}</Typography>
        <Typography variant="h6">Price: ${product.price}</Typography>
        <Typography color="textSecondary">Rating: {product.rating}</Typography>
        <Typography color="textSecondary">Discount: {product.discount}%</Typography>
        <Typography color="textSecondary">Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
