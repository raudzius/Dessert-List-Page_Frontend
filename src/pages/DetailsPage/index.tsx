import * as React from 'react';
import {
 Card, CardContent, CardMedia, Container, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [dessert, setDessert] = React.useState({
    name: '',
    image: '',
    details: '',
  });
  React.useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:4000/details/${id}`);
      const data = await res.json();
      const { name, image, details } = data;
      setDessert({ name, image, details });
    })();
  }, []);

  return (
    <Container>
      <Card sx={{ maxWidth: 1000, mt: 10, mx: 'auto' }}>
        <CardMedia component="img" height="500" image={dessert.image} alt="dessert image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dessert.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dessert.details}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DetailsPage;
