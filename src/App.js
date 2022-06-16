import { useState } from "react";
import { Container } from "react-bootstrap";
import Gallerie from "./components/Gallerie";
import Header from "./components/Header";
import TestData from "./components/TestData";

function App() {
  const [karte, setKarte] = useState(TestData);

  return (
    <Container>
      <Header />
      <Gallerie karte={karte} />
    </Container>
  );
}

export default App;
