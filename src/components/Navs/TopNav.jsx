import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import the CSS file where you define custom styles

function BasicExample() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [isHovered, setIsHovered] = useState(false);
  const closeNav = () => setExpanded(false);

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const handleNavLinkClick = () => {
    scrollToTop();
    closeNav();
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Add your logic here when the dropdown is hovered
    console.log('Dropdown is hovered!');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Add your logic here when the mouse leaves the dropdown
    console.log('Mouse left the dropdown!');
  };


  return (
    <motion.div
    initial={{ y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 20, opacity: 0}}
    className="home"
    
    >
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm fixed-top" expanded={expanded}>
        <Container fluid>
          <Link to="/" className="navbar-brand" onClick={closeNav}><b>CW</b>HOME</Link>
          {/* Use Font Awesome icon instead of the default toggle icon */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>ABOUT</Link>
              <Link to="/resume" className="nav-link" onClick={handleNavLinkClick}>RESUME</Link>
             <Link to="/samples" className="nav-link" onClick={handleNavLinkClick}>SAMPLES</Link>
       <NavDropdown title="MY WORK" id="basic-nav-dropdown"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             show={isHovered} 
             >
          <div style={{ borderRadius:'5px'}} className="shadow">
         <NavDropdown.Item>
         <Link to="/portfolio#portfolio" className="text-black">
              PORTFOLIO</Link>
</NavDropdown.Item>
<NavDropdown.Item>
  <Link to="/portfolio#web-components" className="text-black">COMPONENT SAMPLES</Link>
</NavDropdown.Item>
        
              <NavDropdown.Item>
  <Link to="/forms#forms" className="text-black">FORM SAMPLES</Link>
</NavDropdown.Item>
<NavDropdown.Item>
  <Link to="/page-samples" className="text-black">PAGE SAMPLES</Link>
</NavDropdown.Item>

<NavDropdown.Item>
  <Link to="/server#server" className="text-black">UTILITY APPS</Link>
</NavDropdown.Item>
<NavDropdown.Divider />

<NavDropdown.Item>
  <Link to="/graphics" className="text-black">COMING SOON! <br />Graphics Page</Link>
</NavDropdown.Item>
</div>
            
</NavDropdown>
              <Link to="/contact#contact" className="nav-link" onClick={handleNavLinkClick}>CONTACT</Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default BasicExample;
