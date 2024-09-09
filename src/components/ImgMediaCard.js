import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

export default function ImgMediaCard({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <Card 
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 325,
        height: "100%",
        position: 'relative',
        border: 0,
        borderRadius: "8px",
        boxShadow: "2px 4px 32px 0px rgba(0,0,0.1)" ,
      }}
    >
      <Link to={`/products/${data.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          alt={data.title}
          height="200"
          image={data.images[0]}
          sx={{ cursor: 'pointer' }}
        />
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Link to={`/products/${data.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ cursor: 'pointer' }}>
            {data.title}
          </Typography>
        </Link>
        <Typography gutterBottom variant="h6" component="div">
          ${data.price}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="" fullWidth color="primary" variant="contained" value={data.id} onClick={handleAddToCart}>
          <AddShoppingCartOutlined /> ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}
