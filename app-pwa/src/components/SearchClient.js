import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export const SearchClient = ({ nombre, setNombre, setFecha, fecha }) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label>Nombre del cliente:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Col>
        <Col md={4}>
          <Form.Label>Fecha</Form.Label>
          <Datetime value={fecha} onChange={(date) => setFecha(date)} />
        </Col>
      </Row>
    </Form>
  );
};
