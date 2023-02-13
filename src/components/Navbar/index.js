import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function  NavbarBootstrap() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Christopher Gardner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">About</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/search">Search</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <Link className="navbar-brand" to="/">
  //       Pupster
  //     </Link>
  //     <div>
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <NavLink
  //             to="/"
  //             end
  //             className={({ isActive }) =>
  //               isActive ? 'nav-link active' : 'nav-link'
  //             }
  //           >
  //             About
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink
  //             to="/discover"
  //             className={({ isActive }) =>
  //               isActive ? 'nav-link active' : 'nav-link'
  //             }
  //           >
  //             Discover
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink
  //             to="/search"
  //             className={({ isActive }) =>
  //               isActive ? 'nav-link active' : 'nav-link'
  //             }
  //           >
  //             Search
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  );
}

export default NavbarBootstrap;
