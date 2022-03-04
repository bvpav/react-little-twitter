import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  const router = useRouter();

  const logOut = () => {
    Cookies.remove('accessToken');
    Cookies.remove('groupId');
    router.push('/login');
  };

  return (
    <Navbar variant="pills" bg="light" sticky="top" expand="lg">
      <Container fluid>
        <Link href="/" passHref>
          <Navbar.Brand>React Little Twitter</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Collapse>
          <Nav
            activeKey={router.asPath}
            variant="pills"
            className="justify-content-end flex-grow-1 pe-3"
          >
            <Nav.Item>
              <Link href="/" passHref>
                <Nav.Link>Публикации</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/cookie-clicker" passHref>
                <Nav.Link>Cookie Clicker</Nav.Link>
              </Link>
            </Nav.Item>
            <NavDropdown title="Профил" id="offcanvasNavbarDropdown">
              <NavDropdown.Item
                as="button"
                onClick={logOut}
                className="text-danger"
              >
                Изход
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                href="https://github.com/bvpav/react-little-twitter-frontend"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
