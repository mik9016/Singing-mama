import React from 'react';
 
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';  
import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';




const Navigation = (props) => {
 
 

    return (
        <div className={classes.Navigation}  >
    <Navbar className={props.navStyle} variant={props.variant} >
      <Navbar.Brand as={Link} to="/home" onClick={props.changeNavColorWhite}>Singing-Mama</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home" onClick={props.changeNavColorWhite} >Home</Nav.Link>
      <Nav.Link as={Link} to="/about" onClick={props.changeNavColorBlack}>Über uns</Nav.Link>
      <Nav.Link as={Link} to="/pricing" onClick={props.changeNavColorBlack}>Angebot</Nav.Link>
      <Nav.Link as={Link} to="/kontakt"onClick={props.changeNavColorBlack}>Kontakt</Nav.Link>
      {/* <Nav.Link as={Link} to="/login" onClick={props.changeNavColorBlack}>Login</Nav.Link> */}
      {/* <Nav.Link as={Link} to="/payment" onClick={props.changeNavColorBlack}>Payment</Nav.Link> */}
    </Nav>
            
  </Navbar>
        </div>
    )
};

export default Navigation;
