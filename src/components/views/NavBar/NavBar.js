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
        <Navbar.Brand > Waiters app </Navbar.Brand>
        <Nav>
          <NavLink to='/'> Home </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;