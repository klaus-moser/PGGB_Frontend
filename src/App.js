import Header from "./components/Header";
import Karte from "./components/Karte";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Karte titel={"Bertl"} date={"01.05.2022"} dir={"1.jpg"} />
    </Container>
  );
}

export default App;
