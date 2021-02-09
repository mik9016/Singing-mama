import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Home2.module.scss";

export default function Home2() {
  return (
    <div className={classes.Home2}>
      <Card>
        <Card.ImgOverlay >
          <Container classname="lg">
            <Row className="vh-100 align-items-center ">
              <Col className={classes.Col1}></Col>

              <Col className="text-center">
                <Container className={classes.Container2}>
                  <h1>Singing-Mama</h1>
                  <br />
                  <p>
                    Außergewöhnliche Art,
                    <br /> die Kindheit Ihrer Kinder von Anfang an schön zu
                    machen.
                    <br />
                    Machen Sie Ihr Kind von Anfang an sensibel für Musik.
                  </p>
                  <br />
                  <NavLink
                    to="/about"
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    Mehr
                  </NavLink>
                </Container>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
