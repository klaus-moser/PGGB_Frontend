import Header from "./components/Header";
import Karte from "./components/Karte";
import { Container } from "react-bootstrap";
import Karten from './components/Karten';

function App() {
  return (
    <Container>
      <Header />
      <Karten />
    </Container>
  );
}

export default App;
