import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

export const FormPay = ({
  total,
  anticipo,
  setAnticipo,
  handleSave,
  handleCancel,
}) => {
  const [pendiente, setPendiente] = useState(0);

  const handleAnticipo = (e) => {
    const value = e.target.value;
    if (total >= value) {
      setAnticipo(value);
      setPendiente(total - value);
    }
  };

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
            onChange={handleAnticipo}
            value={anticipo}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Pendiente:</Form.Label>
          <Form.Control type="number" readOnly value={pendiente} />
        </Form.Group>
      </Form.Row>

      <Button as={Col} variant="success" type="submit" onClick={handleSave}>
        Cobrar
      </Button>
      <Button as={Col} variant="danger" type="submit" onClick={handleCancel}>
        Cancelar
      </Button>
    </Form>
  );
};
