import * as React from 'react';
import { Paper, Table, TableContainer } from '@mui/material';
import CustomTableHead from './components/CustomTableHead';
import CustomTableBody from './components/CustomTableBody';

const ListPage = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <CustomTableHead />
      <CustomTableBody />
    </Table>
  </TableContainer>
);

export default ListPage;
