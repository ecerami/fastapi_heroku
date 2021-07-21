import React from "react";
import { Form, Button, Col } from "react-bootstrap";

export const FormPay = ({ ...rest }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Total:</Form.Label>
          <Form.Control
            type="text"
            placeholder="0"
            disabled
            value={420 + 108}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Anticipo</Form.Label>
          <Form.Control type="text" placeholder="0" />
        </Form.Group>
      </Form.Row>

      <Button as={Col} variant="success" type="submit">
        Cobrar
      </Button>
    </Form>
  );
};
