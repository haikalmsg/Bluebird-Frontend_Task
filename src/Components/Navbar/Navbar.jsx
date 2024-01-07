import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../Assets/Navbar/logo.png';

function Topbar() {
  return (
    <Navbar className="navWrapper" sticky='top' data-bs-theme='dark'>
          <Container fluid className='navInnerWrapper'>
            <Navbar.Brand href="/">BlueBird</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Offcanvas
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/wishlist">WishList</Nav.Link>
                    <Nav.Link href="/mybook">Mybook</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Topbar;