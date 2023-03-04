import { Nav, Navbar, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../Components/CSS/Header.css";




export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (showMenu && !event.target.closest(".navbar-collapse")) {
        setShowMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);
  return (
    <div>    <Navbar expand="lg" className="navbar-custom " fixed="top">
      <div className="filter-blur1"></div>
      <Navbar.Brand href="#">GS</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
      <Navbar.Collapse
        id="navbar-nav"
        className={`justify-content-center ${showMenu ? "show" : ""}`}
      >
        <Nav className="text-center">


          <Nav.Link to="/" className="hover-underline-animation" href="#main">Home</Nav.Link>
          <Nav.Link to="/" className="hover-underline-animation" href="#about">About</Nav.Link>
          <Nav.Link to="/" className="hover-underline-animation" href="#skill">Skills</Nav.Link>
          <Nav.Link to="/" className="hover-underline-animation " href="#contact">Contact</Nav.Link>

          <Button variant="outline-success">Hire Me</Button>


        </Nav>

      </Navbar.Collapse>

    </Navbar>

    </div>

  );
}
