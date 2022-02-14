import * as React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navi.css";
const Navi = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>


          <Navbar.Brand href="#home">Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navi">
              <Nav.Link href="UserList">Kullanıcılar</Nav.Link>
              <Nav.Link href="#pricing">Daireler</Nav.Link>
              <Nav.Link href="#pricing">Faturalar</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Yönetici</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navi;
