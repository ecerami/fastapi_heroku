import React from "react";
import { Form } from "react-bootstrap";

export const SearchClient = ({ nombre, setNombre }) => {
  return (
    <>
      Nombre del cliente:
      <Form.Control
        type="text"
        placeholder="Ricardo"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
    </>
  );
};
