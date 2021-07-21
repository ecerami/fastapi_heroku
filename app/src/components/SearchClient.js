import React from "react";
import { Form, Col } from "react-bootstrap";

export const SearchClient = ({ nombre, setNombre, setNumber, number }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre del cliente:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lona impresa"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>nota</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="any"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
};
