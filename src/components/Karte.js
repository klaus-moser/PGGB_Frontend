import { Card } from "react-bootstrap";

function Karte({ titel, date, dir }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={dir} />
      <Card.Body>
        <Card.Title>{titel}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Karte;
