import React from "react";
import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  CardColumns,
  Form
} from "react-bootstrap";
import classes from "../src/TestNav.module.scss";
import Back from "./assets/back.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TestNav() {

  return (
    <div className={classes}>
      <Container style={{marginTop: "5rem"}}>
        <Row height="100vh">
          <Col className="md" height="100vh">
            <Card>
              <Card.Img src={Back} />
            </Card>
          </Col>
          <Col className="md" height="100vh">
            <Form>
            <Form.Label className="md">Email address</Form.Label>
              <Form.Control className="md" type="email" placeholder="E-Mail"/>
              <Form.Label className="md" >Email address</Form.Label>
              <Form.Control className="md" type="email" placeholder="E-Mail"/>
              <Form.Label className="md">Email address</Form.Label>
              <Form.Control className="md" type="email" placeholder="E-Mail"/>
              <Form.Label className="md">Email address</Form.Label>
              <Form.Control className="md"type="email" placeholder="E-Mail"/>
              <Form.Label className="md">Email address</Form.Label>
              <Form.Control className="md" type="email" placeholder="E-Mail"/>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
