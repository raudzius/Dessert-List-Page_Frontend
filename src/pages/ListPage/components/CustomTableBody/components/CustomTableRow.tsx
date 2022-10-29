import * as React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { type TableData } from '..';

type CustomTableRowProps = {
  row: TableData;
};

const CustomTableRow: React.FC<CustomTableRowProps> = ({ row }) => {
  const nav = useNavigate();

  const tableRowClickHandler = () => {
    nav(`/details/${row._id}`);
  };

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      onClick={tableRowClickHandler}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
