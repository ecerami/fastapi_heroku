import React from "react";
import { Form } from "react-bootstrap";

export const SearchClient = ({ ...rest }) => {
  return (
    <>
      Nombre del cliente:
      <Form.Control type="text" placeholder="Ricardo" />
    </>
  );
};
