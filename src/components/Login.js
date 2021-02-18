import { Form, Button, Alert, Container, Card, Col } from "react-bootstrap";
import classes from "./Login.module.scss";
import {Link} from "react-router-dom";
 
const Login = () => {
  return (
    <div className={classes.Login}>
      <Container>
        <Col className="col-4-md text-center">
          <Card className="p-4 shadow-lg" height="80%">
            <Card.Title as="h1" className="text-center">
              Login
            </Card.Title>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Adresse</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formLogind">
                <Form.Label>Kennwort</Form.Label>
                <Form.Control type="password" placeholder="Kennwort" />
              </Form.Group>

              <Container>
                <Button className="m-0" variant="outline-primary" type="submit">
                  Login
                </Button>
              </Container>

              <Form.Text className="text-muted mt-4">
                Du hast noch kein Konto? <Link to="/signin" >Sign Up</Link> 
              </Form.Text>
            </Form>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
