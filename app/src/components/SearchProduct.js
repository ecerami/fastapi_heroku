import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

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
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nombre de producto:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lona impresa"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>cantidad(m2/pz)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="any"
            onChange={(e) => setCantidad(e.target.value)}
            value={cantidad}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>precio</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="any"
            onChange={(e) => setTotal(e.target.value)}
            value={total}
          />
        </Form.Group>
      </Form.Row>

      <Button as={Col} variant="primary" type="submit" onClick={handleSubmit}>
        Agregar
      </Button>
    </Form>
  );
};
