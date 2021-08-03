import React from "react";
import { Table } from "react-bootstrap";
import { v4 } from "uuid";

export const TableProducts = ({ ventas }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio unitario</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {ventas &&
          ventas.map((venta) => (
            <tr key={v4()}>
              <td>{venta.nombre}</td>
              <td>{venta.cantidad}</td>
              <td>${venta.total}</td>
              <td>${venta.cantidad * venta.total}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
