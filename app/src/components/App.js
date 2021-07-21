import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchClient } from "./SearchClient";
import { SearchProduct } from "./SearchProduct";
import { TableProducts } from "./TableProducts";
import { FormPay } from "./FormPay";
import { useState, useEffect } from "react";

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
      const newTotal = ventas.reduce((acc, curr) => acc + curr.total, 0);
      setTotal(newTotal);
    }
  }, [ventas]);

  const handleSave = () => {
    console.log(nombre, ventas, total, anticipo);
  };

  return (
    <Container>
      <h3>Crear nueva nota</h3>
      <Row>
        <Col md={2}>Nota #01</Col>
        <Col>
          <SearchClient nombre={nombre} setNombre={setNombre} />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <SearchProduct onSave={handleAddVenta} />
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
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
