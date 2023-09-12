import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AttractionsIcon from '@mui/icons-material/Attractions';
import AllOutIcon from '@mui/icons-material/AllOut';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Navbar.css'; // Import the CSS file

function Header() {
  return (
    <div className="header-container">
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="custom-navbar fixed-top">
        <Container>
          <Navbar.Brand to="/">
            {/* Use "to" instead of "href" for Link */}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.B2CG9NFPvs1r7WqbAGUptgHaHa%26pid%3DApi&f=1&ipt=ebf893eaabba954a1a0a043c159b009a021fee0c9c2b51746cd96b3fa14e8d30&ipo=images"
              alt="Logo"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                {/* Use "as={Link}" and "to" instead of "href" for Link */}
                <b>Home <HomeIcon /></b>
              </Nav.Link>
              <Nav.Link as={Link} to="/school">
                <b>Scholarship<AllOutIcon /></b>
              </Nav.Link>
              <Nav.Link as={Link} to="/developer">
                <b>Developer<AttractionsIcon /></b>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <b>Contact Us<ContactPageIcon /></b>
              </Nav.Link>
              <Nav.Link as={Link} to="/login"className='btn1'>
                <Button variant="outlined" color="error">
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link as={Link}  to="/register"
              className='btn1'>
                <Button variant="outlined" color="error">
                  Register
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
