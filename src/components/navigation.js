import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = ({ siteTitle }) => (
  <Navbar
    className="navbar-custom"
    variant="dark"
    expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about-armenia">About Armenia</Nav.Link>
          <NavDropdown title="Festival">
            <NavDropdown.Item as={Link} to="/djs">DJs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orchestra">Orchestra</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/maestros">Teachers/Dancers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/venues-and-locations">
              Venues and Locations
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Schedule">
            <NavDropdown.Item as={Link} to="/calendar">Calendar</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/workshop-topics">Workshop Topics</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Booking">
            <NavDropdown.Item as={Link} to="/packages">
              Festival and Tour packages
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/workshops-and-milongas">
              Workshops and milongas
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/yerevan-hotels">
              Yerevan Hotels
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
        <Nav className="navbar-right">
          <NavDropdown title="EN">
            <NavDropdown.Item as={Link} to="/calendar">EN</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/workshop-topics">RU</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/workshop-topics">AM</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
