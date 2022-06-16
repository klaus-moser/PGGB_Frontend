import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Karte({ title, dir, text }) {
  return (

    <Card style={{ width: "18rem" }} className="bg-dark text-white">
      <Card.Img variant="top" src={ dir } alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

Karte.defaultProps = {
  title: "#title",
  text: "#text",
};

Karte.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  dir: PropTypes.string,
};

export default Karte;
