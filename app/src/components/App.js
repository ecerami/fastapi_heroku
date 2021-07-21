import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchClient } from "./SearchClient";
import { SearchProduct } from "./SearchProduct";
import { TableProducts } from "./TableProducts";
import { FormPay } from "./FormPay";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [ventas, setVentas] = useState([]);
  const [total, setTotal] = useState(0);
  const [anticipo, setAnticipo] = useState(0);

  const handleAddVenta = (nombre, cantidad, total) => {
    setVentas([...ventas, { nombre, cantidad, total }]);
  };

  useEffect(() => {
    if (ventas) {
      const newTotal = ventas.reduce(
        (acc, curr) => acc + parseFloat(curr.total) * parseFloat(curr.cantidad),
        0
      );
      setTotal(newTotal);
    }
  }, [ventas]);

  const handleSave = () => {
    console.log(nombre, ventas, total, anticipo);
  };

  const handleCancel = () => {
    setVentas([]);
    setAnticipo(0);
    setTotal(0);
    setNombre("");
  };

  const [numberTicket, setnumberTicket] = useState(0);

  return (
    <Container>
      <h3>Crear nueva nota</h3>
      <Row>
        <Col>
          <SearchClient
            nombre={nombre}
            setNombre={setNombre}
            setnumber={setnumberTicket}
            number={numberTicket}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <SearchProduct handleAddVenta={handleAddVenta} />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <TableProducts ventas={ventas} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormPay
            total={total}
            anticipo={anticipo}
            setAnticipo={setAnticipo}
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
