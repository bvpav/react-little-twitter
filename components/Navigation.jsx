import Link from 'next/link';
import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';

export function Navigation({}) {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">React Little Twitter</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/" passHref>
                <Nav.Link>Публикации</Nav.Link>
              </Link>
              <Link href="/cookie-clicker" passHref>
                <Nav.Link>Cookie Clicker</Nav.Link>
              </Link>
              <NavDropdown title="Профил" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as="button" className="text-danger">
                  Изход
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
