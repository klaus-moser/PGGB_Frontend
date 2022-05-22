import { useState } from "react";
import { Container } from "react-bootstrap";
import Karten from "./components/Karten";
import Header from "./components/Header";
import KartenData from "./components/KartenData";

function App() {
  const [karte, setKarte] = useState(KartenData);

  return (
    <Container>
      <Header />
      <Karten karte={karte} />
    </Container>
  );
}

export default App;
