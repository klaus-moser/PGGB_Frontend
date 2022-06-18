import { Container, Col, Row } from "react-bootstrap";
import Meme from "../components/Meme";

function Gallery({ memes }) {
  if (!memes || memes.length === 0) {
    return (
      <div>
        <h1>Gallery</h1>
        <p>No Memes yet!</p>
      </div>
    );
  }

  return (
    <>
      <h1>Gallery</h1>
      <Container>
        <Row>
          {memes.map((item) => (
            <Col sm>
              <Meme title={item.title} dir={item.dir} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
