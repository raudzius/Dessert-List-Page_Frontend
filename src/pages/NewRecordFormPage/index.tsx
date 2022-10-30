import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const NewRecordForm = () => {
  const dessertRef = React.useRef<null | HTMLInputElement>(null);
  const caloriesRef = React.useRef<null | HTMLInputElement>(null);
  const fatRef = React.useRef<null | HTMLInputElement>(null);
  const carbsRef = React.useRef<null | HTMLInputElement>(null);
  const proteinRef = React.useRef<null | HTMLInputElement>(null);
  const imageRef = React.useRef<null | HTMLInputElement>(null);
  const detailsRef = React.useRef<null | HTMLInputElement>(null);
  const [invalid, setInvalid] = React.useState(false);
  const nav = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formInputValues = {
      name: dessertRef.current?.value,
      calories: caloriesRef.current?.value,
      fat: fatRef.current?.value,
      carbs: carbsRef.current?.value,
      protein: proteinRef.current?.value,
      image: imageRef.current?.value,
      details: detailsRef.current?.value,
    };

    if (!Object.values(formInputValues).includes('')) {
      (async () => {
        await fetch('http://localhost:4000/list', {
          method: 'POST',
          body: JSON.stringify(formInputValues),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      })();
      nav('/');
    } else {
      setInvalid(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          New Record
        </Typography>
        <Box
          component="form"
          method="POST"
          action="/list"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          {invalid && (
            <Typography color="error" variant="h4" component="p" sx={{ textAlign: 'center' }}>
              All fields are required!
            </Typography>
          )}
          <TextField
            inputRef={dessertRef}
            margin="normal"
            required
            fullWidth
            id="dessert"
            label="Dessert"
            name="dessert"
            autoFocus
          />
          <TextField
            inputRef={caloriesRef}
            margin="normal"
            required
            fullWidth
            name="calories"
            label="Calories"
            id="calories"
            type="number"
          />
          <TextField
            inputRef={fatRef}
            margin="normal"
            required
            fullWidth
            name="fat"
            label="Fat (g)"
            id="fat"
            type="number"
          />
          <TextField
            inputRef={carbsRef}
            margin="normal"
            required
            fullWidth
            name="carbs"
            label="Carbs (g)"
            id="carbs"
            type="number"
          />
          <TextField
            inputRef={proteinRef}
            margin="normal"
            required
            fullWidth
            name="protein"
            label="Protein (g)"
            id="protein"
            type="number"
          />
          <TextField
            inputRef={imageRef}
            margin="normal"
            required
            fullWidth
            name="image"
            label="Image Url"
            id="image"
          />
          <TextField
            inputRef={detailsRef}
            rows={4}
            margin="normal"
            multiline
            required
            fullWidth
            name="details"
            label="Details"
            id="details"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Add
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NewRecordForm;
