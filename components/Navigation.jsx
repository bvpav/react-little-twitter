import Cookies from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';

export function Navigation({}) {
  const logOut = () => {
    Cookies.remove('accessToken');
    Cookies.remove('groupId');
    Router.push('/login');
  };

  return (
    <Navbar bg="light" sticky="top" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Link href="/" passHref>
          <Navbar.Brand>React Little Twitter</Navbar.Brand>
        </Link>
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
                <NavDropdown.Item
                  as="button"
                  onClick={logOut}
                  className="text-danger"
                >
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
