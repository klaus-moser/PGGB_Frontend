import { Container, Col, Row } from "react-bootstrap";
import Meme from "./Meme";

function Gallerie({ memes }) {
  if (!memes || memes.length === 0) {
    return <p>No Memes yet!</p>;
  }

  return (
    <Container>
      <Row>
        {memes.map((item) => (
          <Col sm>
            <Meme title={item.title} dir={item.dir} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallerie;
