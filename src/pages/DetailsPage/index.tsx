import * as React from 'react';
import {
 Card, CardContent, CardMedia, Container, Typography,
} from '@mui/material';

const DetailsPage = () => (
  <Container>
    <Card sx={{ maxWidth: 1000, mt: 10, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="500"
        image="https://www.slimmingeats.com/blog/wp-content/uploads/2021/09/frozen-yoghurt-with-raspberries-and-white-chocolate-1-720x720.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  </Container>
);

export default DetailsPage;
