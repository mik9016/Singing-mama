import React from "react";

function Functions() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  return <div></div>;
}

export default {
  
  handleShow,
  validateForm,
  handleShowDate,
  handlePaketValue,
  handleVornameInput,
  handleNameInput,
  handleEmailInput,
  handleMessageInput,
  handleOptionInput,
  handleDateInput,
  resetFields,
  createModalInfo,
  sendContactForm,
};
