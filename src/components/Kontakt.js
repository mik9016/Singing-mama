import React, { useState, useRef } from 'react'
import classes from './Kontakt.module.scss'
import { Card, Form, Modal, Alert} from 'react-bootstrap'
import firebase from '../firebase'
import {NavLink} from 'react-router-dom'






export default function Kontakt(props) {
    
    const [vorname, setVorname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')
    const [date, setDate] = useState('');
    const [showModal, setShow] = useState(false);
    const [showDate, setShowDate] = useState(false)
    const [toPayment, setToPayment] = useState('/kontakt')
    const [modalText, setModalText] = useState('Your message has been sent!')
    const [modalTitle, setModalTitle] = useState('Thank you for contacting us!')
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const msgInput = useRef(null);
    const optionInput = useRef(null)
    //poprawic
    function handleShowDate(){ 
            
            setShowDate(true)
        
        }

    function handleVornameInput(e) {
        setVorname(e.target.value)
        // console.log('Vorname: ' + vorname )
        
    }
    function handleNameInput(e) {
        setName(e.target.value)
        // console.log('Name: ' + name )
        
    }
    function handleEmailInput(e) {
        setEmail(e.target.value)
        // console.log('Email: ' + email )
        
    }
    function handleMessageInput(e) {
        setMessage(e.target.id)
        // console.log('Message: ' + message )
        
    }
    function handleOptionInput(e) {
        setOption(e.target.value)
        // console.log(e.target.value)
    }
    function handleDateInput(e) {
        setDate(e.target.value)
    }
    function resetFields() {
        console.log('reset Fields')
        Array.from(document.querySelectorAll('input')).forEach(input => {
            input.value = ''
        });
        
        msgInput.current.value = '';
        optionInput.current.value = 'Auswahl'

    }

    function createModalInfo() {
        // console.log('createModalInfo')
        handleShow()
    }


    function sendContactForm() {
        const contactFormRef = firebase.database().ref('ContactForm');
        const formReadyToSend = {
            vorname,
            name,
            email,
            option,
            date,
            message

        }
        contactFormRef.push(formReadyToSend)
        
    }

    function validateForm() {

            try{
        setError('')

    }catch{
        setError('Failed to sign in')
    }
    }


   
    return (
        <div className={classes.Kontakt}>
            <Form style={{display:"flex",flexDirection:"row-reverse",alignItems:"center", justifyContent:"right"}} onChange={validateForm}>
                <Card style={{margin:"64px",display:"flex",alignItems:"center", justifyContent:"right", width:"35vw", border:"none" }}>
                    <Card.Body style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <h1>Contact Us</h1>
                        
                        <input id='vorname' type="text" className="form-control" placeholder="Vorname" aria-label="Vorname"  onChange={handleVornameInput} required/>
                        <input id='name' type="text" className="form-control" placeholder="Nachname" aria-label="Nachname" onChange={handleNameInput} required/>
                       
                        <input id='email' type="email" className="form-control" placeholder="E-Mail" aria-label="E-mail" onChange={handleEmailInput} required/>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control ref={optionInput} as="select" aria-required style={{margin: "8px", width:"32vw"}} onChange={handleOptionInput} onClick={handleShowDate}>
                            <option>Auswahl</option>
                            <option id='Terminvereinbarung' >Terminvereinbarung</option>
                            <option id='Allgemeine Frage'>Allgemeine Frage</option>
                            </Form.Control>
                        </Form.Group>
                        {showDate ? <div >
                            <label>Termin:</label>
                            <input id="date" type='date'className="form-control" onChange={handleDateInput} required/>
                        </div> : null}

                        <textarea id='message' ref={msgInput} type="text" placeholder="Your Message" onChange={handleMessageInput} /> 
                        {error && <Alert variant="danger">{error}</Alert>}
                        <button
                                type="button" 
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    
                                    if(option === 'Terminvereinbarung'){
                                        console.log(option)
                                        if(vorname &&
                                            name &&
                                            email &&
                                            message &&
                                            date 
                                        
                                            !== '' ){
                                                    
                                                    setError('')
                                                    sendContactForm()
                                                    resetFields()
                                                    createModalInfo()   
                                                    setToPayment('/payment') 
                                                    setModalTitle('Thank you for picking your Termin!')
                                                    setModalText('You will be forwarded to payment window!')                                   
                                            }else {
                                                 setError('Please fill out all the fields')
                                            }
                                    }else {

                                        if(vorname &&
                                            name &&
                                            email &&
                                            message &&
                                            option
                                            !== '' ){
                                                    
                                                    setError('')
                                                    sendContactForm()
                                                    resetFields()
                                                    createModalInfo()                                       
                                            }else {
                                                 setError('Please fill out all the fields')
                                            }                                        
                                    }

 
                                }}                            
                                > 
                                Submit           
                        </button> 


                    </Card.Body>
                </Card>
                

            </Form>
            <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >{modalText}</Modal.Body>
                    <Modal.Footer>
                    <NavLink to={toPayment} type='button' className="btn btn-primary"  onClick={handleClose}>
                        Close
                    </NavLink>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}
