import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Button, Grid, Typography, Stack, Paper } from '@mui/material';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleBackToProducts = () => {
    navigate('/');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <Paper elevation={3} sx={{ padding: 4, margin: 'auto', maxWidth: 1000 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img
            src={product.images[0]}
            alt={product.title}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack spacing={2}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="h5" color="secondary">
              ${product.price}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              sx={{ width: 'fit-content' }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBackToProducts}
              sx={{ width: 'fit-content' }}
            >
              Back to Products
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
