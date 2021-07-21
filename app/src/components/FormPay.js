import React from "react";
import { Form, Button, Col } from "react-bootstrap";

export const FormPay = ({ total, anticipo, setAnticipo, handleSave }) => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Total:</Form.Label>
          <Form.Control type="number" readOnly value={total} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Anticipo</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setAnticipo(e.target.value)}
            value={anticipo}
          />
        </Form.Group>
      </Form.Row>

      <Button as={Col} variant="success" type="submit" onClick={handleSave}>
        Cobrar
      </Button>
    </Form>
  );
};
