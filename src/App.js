import Header from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="col-md-10">
      <Header />
      <Footer />
    </Container>
  );
}

export default App;
