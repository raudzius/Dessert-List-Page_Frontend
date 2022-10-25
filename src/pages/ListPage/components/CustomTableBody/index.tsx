import * as React from 'react';
import { TableBody } from '@mui/material';
import CustomTableRow from './components/CustomTableRow';

export type TableData = {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

const createData = (
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): TableData => ({
  id,
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  createData(0, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(1, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(2, 'Eclair', 262, 16.0, 24, 6.0),
  createData(3, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(4, 'Gingerbread', 356, 16.0, 49, 3.9),
];

const CustomTableBody = () => (
  <TableBody>
    {rows.map((row) => (
      <CustomTableRow key={row.id} row={row} />
    ))}
  </TableBody>
);

export default CustomTableBody;
