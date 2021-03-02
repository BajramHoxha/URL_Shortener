import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

export default (props) => (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#home">FASTLY</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">ABOUT US</Nav.Link>
          <Nav.Link href="#">SIGN UP</Nav.Link>
          <Nav.Link href="#">CONTACT US</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
);