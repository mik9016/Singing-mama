import React, { useState, useRef } from "react";
import classes from "./Kontakt.module.scss";
import {
  Card,
  Form,
  Modal,
  Alert,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import firebase from "../firebase";
import { NavLink } from "react-router-dom";
import Picture from "../assets/together.jpg";


export default function Kontakt(props) {
  const [vorname, setVorname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  const [paket, setPaket] = useState("");
  const [showModal, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [toPayment, setToPayment] = useState("/kontakt");
  const [modalText, setModalText] = useState("Your message has been sent!");
  const [modalTitle, setModalTitle] = useState("Thank you for contacting us!");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const msgInput = useRef(null);
  const optionInput = useRef(null);

  function handleShowDate() {
    setShowDate(true);
  }
  function handlePaketValue(e) {
    setPaket(e.target.value);
  }

  function handleVornameInput(e) {
    setVorname(e.target.value);
    // console.log('Vorname: ' + vorname )
  }
  function handleNameInput(e) {
    setName(e.target.value);
    // console.log('Name: ' + name )
  }
  function handleEmailInput(e) {
    setEmail(e.target.value);
    // console.log('Email: ' + email )
  }
  function handleMessageInput(e) {
    setMessage(e.target.id);
    // console.log('Message: ' + message )
  }
  function handleOptionInput(e) {
    setOption(e.target.value);
    // console.log(e.target.value)
  }
  function handleDateInput(e) {
    setDate(e.target.value);
  }
  function resetFields() {
    console.log("reset Fields");
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      input.value = "";
    });

    msgInput.current.value = "";
    optionInput.current.value = "Auswahl";
  }

  function createModalInfo() {
    // console.log('createModalInfo')
    handleShow();
  }

  function sendContactForm() {
    const contactFormRef = firebase.database().ref("ContactForm");
    const formReadyToSend = {
      vorname,
      name,
      email,
      option,
      date,
      paket,
      message,
    };
    contactFormRef.push(formReadyToSend);
    console.log("message sent to Database");
  }

  function validateForm() {
    try {
      setError("");
    } catch {
      setError("Failed to sign in");
    }
  }

  return (
    <div className={classes.Kontakt}>
      <Container width="100vw" >
        <Row className="col-lg" height="80vh" width="100vw">
          <Col className="col-md">
            <Card.Img src={Picture} alt="Pic" className="img-fluid"/>
          </Col>
          <Col height="100vh" className="col-md">
            <Form className={classes.Form} onChange={validateForm}>
              <Card className={classes.Form}>
                <Card.Header>
                  <Card.Title as="h1" className="text-center mt-4">
                    Termin vereinbaren
                  </Card.Title>
                </Card.Header>

                <Card.Body className={classes.CardBod}>
                  <h3>{props.item}</h3>
                  <h3>{props.priceItem}</h3>
                  <Form.Control
                    id="vorname"
                    type="text"
                    className="mb-4"
                    placeholder="Vorname"
                    aria-label="Vorname"
                    onChange={handleVornameInput}
                    required
                  />
                  <Form.Control
                    id="name"
                    type="text"
                    className="mb-4"
                    placeholder="Nachname"
                    aria-label="Nachname"
                    onChange={handleNameInput}
                    required
                  />

                  <Form.Control
                    id="email"
                    type="email"
                    className="mb-4"
                    placeholder="E-Mail"
                    aria-label="E-mail"
                    onChange={handleEmailInput}
                    required
                  />
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      className="mb-4"
                      ref={optionInput}
                      as="select"
                      aria-required
                      style={{ margin: "8px", width: "32vw" }}
                      onChange={(e) => {
                        handleOptionInput(e);
                        if (e.target.value === "Terminvereinbarung") {
                          handleShowDate();
                        } else {
                          setShowDate(false);
                        }
                      }}
                    >
                      <option>Ziel</option>
                      <option id="Terminvereinbarung">
                        Terminvereinbarung
                      </option>
                      <option id="Allgemeine Frage">Allgemeine Frage</option>
                    </Form.Control>
                  </Form.Group>
                  {showDate ? (
                    <div>
                      <label>Termin:</label>
                      <Form.Control
                        id="date"
                        type="datetime-local"
                        className="mb-4"
                        onChange={handleDateInput}
                        required
                      />
                    </div>
                  ) : null}

                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control
                      as="select"
                      aria-required
                      style={{ margin: "8px", width: "32vw" }}
                      onChange={(e) => {
                        handlePaketValue(e);
                      }}
                    >
                      <option>Pakiet</option>
                      <option>{props.pricePackage1} </option>
                      <option> {props.pricePackage2}</option>
                      <option> {props.pricePackage3}</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Control
                    as="textarea"
                    rows="6"
                    
                    id="message"
                    ref={msgInput}
                    type="text"
                    placeholder="Your Message"
                    className="mb-4"
                    onChange={handleMessageInput}
                  />
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Container className="text-center">

                 
                  <Button
                    className="mb-4" 
                    variant="outline-primary"
                    onClick={() => {
                      if (option === "Terminvereinbarung") {
                        console.log(option);
                        if (
                          vorname &&
                          name &&
                          email &&
                          message &&
                          date !== ""
                        ) {
                          setError("");
                          sendContactForm();
                          resetFields();
                          createModalInfo();
                          setToPayment("/payment");
                          setModalTitle("Thank you for picking your Termin!");
                          setModalText(
                            "You will be forwarded to payment window!"
                          );
                        } else {
                          setError("Please fill out all the fields");
                        }
                      } else {
                        if (
                          vorname &&
                          name &&
                          email &&
                          message &&
                          paket &&
                          option !== ""
                        ) {
                          setError("");
                          sendContactForm();
                          resetFields();
                          createModalInfo();
                        } else {
                          setError("Please fill out all the fields");
                        }
                      }
                    }}
                  >
                    Submit
                  </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Form>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalText}</Modal.Body>
              <Modal.Footer>
                <NavLink
                  to={toPayment}
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClose}
                >
                  Close
                </NavLink>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
