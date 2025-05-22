import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css"; // Import the CSS file where you define custom styles

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    closeNavbar();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

      <Navbar
        expand="lg"
        className="shadow-sm bg-body-tertiary fixed-top"
        expanded={expanded}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ fontSize: "14px" }}
            onClick={handleNavLinkClick}
          >
            <b>CW</b>HOME
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleNavbarToggle}
          >
            <FontAwesomeIcon icon={faBars} color="black" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleNavLinkClick}
                style={{ fontSize: "14px" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={handleNavLinkClick}
                style={{ fontSize: "14px" }}
              >
                Resume
              </Nav.Link>
             
              <NavDropdown 
                title="My Work" 
                id="basic-nav-dropdown" 
                style={{ fontSize: "14px" }} 
                onSelect={handleNavLinkClick}
              >
                <NavDropdown.Item 
                  as={Link}
                  to="/portfolio"
                  style={{ fontSize: "14px" }}
                >
                  Web Components
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link}
                  to="/samples"
                  style={{ fontSize: "14px" }}
                >
                  Landing Pages
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link}
                  to="/forms"
                  style={{ fontSize: "14px" }}
                >
                  Forms
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link}
                  to="/cards"
                  style={{ fontSize: "14px" }}
                >
                  Cards & Images
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link}
                  to="/server"
                  style={{ fontSize: "14px" }}
                >
                  Utility Apps
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link}
                  to="/graphics"
                  style={{ fontSize: "14px" }}
                >
                  Graphics
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link
                to="/contact"
                className="button text-grey mr-3"
                style={{ fontSize: "14px" }}
                onClick={handleNavLinkClick}
              >
                <button className="btn-outline-white w3-button btn-sm rounded px-3 shadow">
                  <i className="far fa-user-circle"></i> contact
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  );
}

export default BasicExample;
