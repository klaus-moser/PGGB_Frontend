import { Container } from "react-bootstrap";
import Karten from './components/Karten';
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <Karten />
    </Container>
  );
}

export default App;
