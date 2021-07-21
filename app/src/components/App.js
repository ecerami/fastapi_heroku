import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchClient } from "./SearchClient";
import { SearchProduct } from "./SearchProduct";
import { TableProducts } from "./TableProducts";
import { FormPay } from "./FormPay";

const App = () => {
  return (
    <Container>
      <h3>Crear nueva nota</h3>
      <Row>
        <Col md={2}>Nota #01</Col>
        <Col>
          <SearchClient />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <SearchProduct />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
          <TableProducts />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormPay />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
