import { Container, Typography, Button } from "@mui/joy";

const ProductPage = () => {
  return (
    <Container>
      <Typography level="h3">Product Details</Typography>
      <Typography level="body1">Here you can find all the details about the product.</Typography>
      <Button variant="solid">Add to Cart</Button>
    </Container>
  );
};

export default ProductPage;
