import React from "react";
import {Link} from "react-router-dom";
import { Form, Button, Container, Card, Col } from "react-bootstrap";
import classes from "./Signin.module.scss";


export default function Signin() {
  return (
    <div className={classes.Signin}>
      <Container>
        <Col className="col-4-md text-center">
          <Card className="p-4 shadow-lg">
            <Card.Title as="h1" className="text-center">
              Sign Up
            </Card.Title>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Vorname</Form.Label>
                <Form.Control type="text" placeholder="Vorname" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nachname</Form.Label>
                <Form.Control type="text" placeholder="Nachname" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" />
              </Form.Group>
              <Form.Group controlId="formLogind">
                <Form.Label>Kennwort</Form.Label>
                <Form.Control type="password" placeholder="Kennwort" />
              </Form.Group>

              <Container>
                <Button className="m-0" variant="outline-primary" type="submit">
                  Sign Up
                </Button>
              </Container>

              <Form.Text className="text-muted mt-4">
                Already have an account? <Link to="/login">Login</Link>
              </Form.Text>
            </Form>
            
          </Card>
        </Col>
      </Container>
    </div>
  );
}
