import Karte from './Karte';
import { Container, Col, Row } from "react-bootstrap";

function Karten() {
  return (
    <Container>
      <Row>
        <Col sm><Karte titel={'Bertel 1'} dir={'1.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 2'} dir={'2.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 3'} dir={'3.jpg'}/></Col>
      </Row>
    </Container>
  );
}

export default Karten;
