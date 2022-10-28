import * as React from 'react';
import {
 Button, Container, Paper, Table, TableContainer,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomTableHead from './components/CustomTableHead';
import CustomTableBody from './components/CustomTableBody';

const ListPage = () => {
  const nav = useNavigate();

  const buttonClickHandler = () => {
    nav('/newRecord');
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableHead />
          <CustomTableBody />
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        size="large"
        sx={{ position: 'fixed', bottom: 30, right: '5vw' }}
        onClick={buttonClickHandler}
      >
        Add Record
      </Button>
    </Container>
  );
};

export default ListPage;
