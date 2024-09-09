// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
