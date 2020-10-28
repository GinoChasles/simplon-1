import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function TopNav() {
  return (
    <Navbar id="top-nav" bg="white" expand="lg">
      <Navbar.Brand><img src="/img/logos/jpdv-logo.png" alt="logo" height="100px" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">VÉHICULES</Nav.Link>
          <Nav.Link href="#link">ENTREPRISE</Nav.Link>
          <Nav.Link href="#link">AGENCES</Nav.Link>
          <Nav.Link href="#link">CONTACT</Nav.Link>
          <Nav.Link href="#link">COVID</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
          <Button variant="outline-success">Recherche</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
