import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <Navbar
        className="navbar fixed-top navbar-light bg-none"
        expand="lg"
        bg={props.bg}
        variant={props.variant}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-none m-0" />
        <Navbar.Brand as={Link} to="/home">
          Singing-Mama
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home" >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" >
              Über uns
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" >
              Angebot
            </Nav.Link>
            <Nav.Link as={Link} to="/kontakt" >
              Kontakt
            </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
