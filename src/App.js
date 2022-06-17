import { useState } from "react";
import { Container } from "react-bootstrap";
import Gallerie from "./components/Gallerie";
import Header from "./components/Header";
import TestData from "./components/TestData";

function App() {
  const [memes, setMemes] = useState(TestData);

  return (
    <Container>
      <Header />
      <Gallerie memes={memes} />
    </Container>
  );
}

export default App;
