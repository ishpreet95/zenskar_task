import React from "react";
import { Table } from "@mui/joy";
function createData(name, calories, carbs, protein) {
  return { name, calories, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 24, 4.0),
  createData("Ice cream sandwich", 237, 37, 4.3),
  createData("Cupcake", 305, 67, 4.3),
];
const TableComponent = () => {
  return (
    <Table
      borderAxis="both"
      size="md"
      color="neutral"
      variant="soft"
      sx={{ width: "400px", height: "225px" }}
    >
      <thead>
        <tr>
          <th>Menu</th>
          <th>Calories</th>
          <th>Carbs&nbsp;(g)</th>
          <th>Protein&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Totals</th>
          <td>1,319</td>
          <td>201</td>
          <td>22.5</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableComponent;
