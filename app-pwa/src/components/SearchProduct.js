import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";

export const SearchProduct = ({ handleAddVenta }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = () => {
    if (nombre && cantidad && total) {
      handleAddVenta(nombre, cantidad, total);
      setNombre("");
      setCantidad(0);
      setTotal(0);
    }
  };

  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Label>Nombre de producto:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lona impresa"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Col>
        <Col md={3}>
          <Form.Label>Cantidad(m2/pz).</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="any"
            onChange={(e) => setCantidad(e.target.value)}
            value={cantidad}
          />
        </Col>
        <Col md={3}>
          <Form.Label>Total:</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="any"
            onChange={(e) => setTotal(e.target.value)}
            value={total}
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Button as={Col} variant="primary" type="submit" onClick={handleSubmit}>
          Agregar
        </Button>
      </Row>
    </Form>
  );
};
