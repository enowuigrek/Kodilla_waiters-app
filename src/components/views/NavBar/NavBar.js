import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, NavLink, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className='rounded'
    >
      <Container>
        <Navbar.Brand href='#'> Waiters app </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;