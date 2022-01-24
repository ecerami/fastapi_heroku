import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

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
      <Row>
        <Col>
          <Form.Label>Total:</Form.Label>
          <Form.Control type="number" readOnly value={total} />
        </Col>

        <Col>
          <Form.Label>Anticipo</Form.Label>
          <Form.Control
            type="number"
            onChange={handleAnticipo}
            value={anticipo}
          />
        </Col>
        <Col>
          <Form.Label>Pendiente:</Form.Label>
          <Form.Control type="number" readOnly value={pendiente} />
        </Col>
      </Row>

      <Row className="mt-2">
        <Button as={Col} variant="success" type="submit" onClick={handleSave}>
          Cobrar
        </Button>
        <Button as={Col} variant="danger" type="submit" onClick={handleCancel}>
          Cancelar
        </Button>
      </Row>
    </Form>
  );
};
