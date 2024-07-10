import { useState } from 'react';
import './App.css';
import Example from './Example';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="Nav">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Button variant="success" onClick={handleShow}>
              Launch demo modal
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Example show={show} handleShow={handleShow} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;

