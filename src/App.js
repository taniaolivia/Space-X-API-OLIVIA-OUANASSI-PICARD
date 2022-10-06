import "./App.css";
import Launches from "./components/Launches";
import Capsules from "./components/Capsules";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import React from "react";

function App() {
  const [page, setPage] = React.useState("launches");

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>SpaceX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setPage("launches")}>Launches</Nav.Link>
              <Nav.Link onClick={() => setPage("capsules")}>Capsules</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {page === "launches" && <Launches />}
      {page === "capsules" && <Capsules />}
    </div>
  );
}

export default App;
