import React from 'react';
 
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';  
import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Navigation = (props) => {
  const [navStyle, setNavstate] = useState('navbar fixed-top navbar-dark')



  function changeNavColorBlack() {
    setNavstate('navbar fixed-top navbar-light')
  }

  function changeNavColorWhite() {
    setNavstate('navbar fixed-top navbar-dark')
  }


    return (
        <div className={classes.Navigation}>
    <Navbar className={navStyle}>
      <Navbar.Brand as={Link} to="/home" >Singing-Mama</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home" onClick={changeNavColorWhite}>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" onClick={changeNavColorBlack}>About</Nav.Link>
      <Nav.Link as={Link} to="/pricing" onClick={changeNavColorBlack}>Pricing</Nav.Link>
      <Nav.Link as={Link} to="/kontakt"onClick={changeNavColorBlack}>Kontakt</Nav.Link>
      <Nav.Link as={Link} to="/login" onClick={changeNavColorBlack}>Login</Nav.Link>
    </Nav>
            
  </Navbar>
        </div>
    )
};

export default Navigation;
