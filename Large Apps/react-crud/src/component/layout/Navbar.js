import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

// Nav Link is used for Active Feature Like in NavBar

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">React User</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/home"> Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about"> About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact"> Contact</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>{' '}
      </Navbar>
    </>
  );
}

export default NavBar;