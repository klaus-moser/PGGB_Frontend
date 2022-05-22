import { Container, Col, Row } from "react-bootstrap";
import Karte from './Karte';

function Karten() {
  return (
    <Container>
      <Row>
        <Col sm><Karte titel={'Bertel 1'} dir={'test_images/1.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 2'} dir={'test_images/2.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 3'} dir={'test_images/3.jpg'}/></Col>
      </Row>
      <Row>
        <Col sm><Karte titel={'Bertel 4'} dir={'test_images/4.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 5'} dir={'test_images/5.jpg'}/></Col>
        <Col sm><Karte titel={'Bertel 6'} dir={'test_images/6.jpg'}/></Col>
      </Row>
    </Container>
  );
}

export default Karten;
