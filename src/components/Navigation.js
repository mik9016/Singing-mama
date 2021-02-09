import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import UserContext from'../components/Context';

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>

      <Navbar
        className="navbar fixed-top bg-none"
        expand="lg"
        variant={props.variant}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav bg-none m-0" />
        <Navbar.Brand as={Link} to="/home" onClick={props.setToWhite}>
          Singing-Mama
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home" onClick={props.setToWhite}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={props.setToBlack}>
              Über uns
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" onClick={props.setToBlack}>
              Angebot
            </Nav.Link>
            <Nav.Link as={Link} to="/kontakt" onClick={props.setToBlack}>
              Kontakt
            </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
