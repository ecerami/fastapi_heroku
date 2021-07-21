import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export const SearchProduct = ({ ...rest }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre de producto:</Form.Label>
          <Form.Control type="text" placeholder="Lona impresa" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>cantidad(m2/pz)</Form.Label>
          <Form.Control type="number" min="1" step="any" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>total</Form.Label>
          <Form.Control type="number" min="1" step="any" />
        </Form.Group>
      </Form.Row>

      <Button as={Col} variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};
