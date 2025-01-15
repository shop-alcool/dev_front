import { Container, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Shop = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={2}>
        {cart.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Shop;