import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Karte({ titel, dir }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={dir} />
      <Card.Body>
        <Card.Title>{titel}</Card.Title>
      </Card.Body>
    </Card>
  );
}

Karte.defaultProps = {
  text: "#Title",
};

Karte.propTypes = {
  titel: PropTypes.string,
  dir: PropTypes.string,
};

export default Karte;
