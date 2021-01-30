import React, {useState} from 'react'
import classes from './Kontakt.module.scss'
import { Card, Form, Modal, Button, Alert} from 'react-bootstrap'
import firebase from '../firebase'





export default function Kontakt(props) {
    
    const [vorname, setVorname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')
    const [date, setDate] = useState('');
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   

    function handleVornameInput(e) {
        setVorname(e.target.value)
        console.log('Vorname: ' + vorname )
        
    }
    function handleNameInput(e) {
        setName(e.target.value)
        console.log('Name: ' + name )
        
    }
    function handleEmailInput(e) {
        setEmail(e.target.value)
        console.log('Email: ' + email )
        
    }
    function handleMessageInput(e) {
        setMessage(e.target.id)
        console.log('Message: ' + message )
        
    }
    function handleOptionInput(e) {
        setOption(e.target.value)
        console.log(e.target.value)
    }
    function handleDateInput(e) {
        setDate(e.target.value)
    }
    function resetFields() {
        console.log('reset Fields')
    
        const vornameInput = document.getElementById('vorname')
        const nameInput = document.getElementById('name')
        const emailInput = document.getElementById('email')
        const messageInput = document.getElementById('message')
        const dateInput = document.getElementById('date')
        vornameInput.value = ''
        nameInput.value = ''
        emailInput.value = ''
        messageInput.value = ''
        dateInput.value = ''
    }

    function createModalInfo() {
        console.log('createModalInfo')
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
                        <input id="date" type='date'className="form-control" onChange={handleDateInput} required/>
                        <input id='email' type="email" className="form-control" placeholder="E-Mail" aria-label="E-mail" onChange={handleEmailInput} required/>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" aria-required style={{margin: "8px", width:"32vw"}} onChange={handleOptionInput}>
                            <option>Auswahl</option>
                            <option id='Terminvereinbarung'>Terminvereinbarung</option>
                            <option id='Allgemeine Frage'>Allgemeine Frage</option>
                            </Form.Control>
                        </Form.Group>

                        <textarea id='message' type="text" placeholder="Your Message" onChange={handleMessageInput} /> 
                        {error && <Alert variant="danger">{error}</Alert>}
                        <button
                                type="button" 
                                className="btn btn-outline-primary"
                                onClick={() => {
                                        if(vorname &&
                                            name &&
                                            email &&
                                            message &&
                                            date &&
                                            option
                                            !== '' ){
                                                    
                                                    setError('')
                                                    sendContactForm()
                                                    resetFields()
                                                    createModalInfo()                                       
                                            }else {
                                                 setError('Please fill out all the fields')
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
          <Modal.Title>Thank you for contacting us!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
