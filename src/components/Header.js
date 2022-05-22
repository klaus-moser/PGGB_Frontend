import PropTypes from "prop-types";
import { Button, Row, Col, Container } from "react-bootstrap";

function Header({ text }) {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1>{text}</h1>
          <h5>May the MEME be with you!</h5>
        </Col>
        <Col sm={4}>
          <Button variant="primary">Login</Button>{" "}
          <Button variant="secondary">Register</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

Header.defaultProps = {
  text: "Pan-Galactic-Gargle-Blaster",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
