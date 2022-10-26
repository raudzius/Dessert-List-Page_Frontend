import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DetailsPage = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://www.slimmingeats.com/blog/wp-content/uploads/2021/09/frozen-yoghurt-with-raspberries-and-white-chocolate-1-720x720.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
        all continents except Antarctica
      </Typography>
    </CardContent>
  </Card>
);

export default DetailsPage;
