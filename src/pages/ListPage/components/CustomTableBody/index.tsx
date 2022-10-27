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

const CustomTableBody = () => {
  const [rows, setRows] = React.useState<TableData[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:4000/list');
      const data = (await res.json()) as TableData[];
      console.log(data);
      setRows(data);
    })();
  }, []);

  return (
    <TableBody>
      {rows.map((row) => (
        <CustomTableRow key={row.id} row={row} />
      ))}
    </TableBody>
  );
};

export default CustomTableBody;
