import { Container, Col, Row } from "react-bootstrap";
import Karte from "./Karte";

function Karten({ karte }) {
  if (!karte || karte.length === 0) {
    return <p>No Memes yet!</p>;
  }

  return (
    <Container>
      <Row>
        {karte.map((item) => (
          <Col sm>
            <Karte titel={item.title} dir={item.dir} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Karten;
