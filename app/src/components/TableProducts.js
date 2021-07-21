import React from "react";
import { Table } from "react-bootstrap";

export const TableProducts = ({ ...rest }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>precio</th>
            <th>Cantidad</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lona</td>
            <td>$90</td>
            <td>1.2mts</td>
            <td>$108</td>
          </tr>
          <tr>
            <td>Vinil</td>
            <td>$350</td>
            <td>1.2mts</td>
            <td>$420</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
