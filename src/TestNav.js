import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import classes from "../src/TestNav.module.scss";
import Back from "./assets/back.jpg";
import "bootstrap/dist/css/bootstrap.min.css";



export default function TestNav() {
  // const [bgColor, setbgColor] = useState('navbar fixed-top navbar-dark')
  // const [expand, setExpandVal] = useState('none')

  // function responsiveToggle() {

  //         setbgColor('navbar-dark bg-dark')
  //         // setExpandVal('lg')

  // }

  // useEffect(()=> {

  //     window.addEventListener('resize', responsiveToggle)
  //     return _ => {
  //         window.removeEventListener('resize', responsiveToggle)}
  // })
  return (
    <div className={classes.TestNav}>
      <Navbar className="navbar fixed-top navbar-light bg-none" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Image src={Back} fluid className={classes.img} />
          </Col>
          <Col>
            <h1>Tytul</h1>
            <p>Lorem asd asdas dad as dasd asd s</p>
            <Button variant='primary' className={classes.homebutton}>Clikc ME</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
