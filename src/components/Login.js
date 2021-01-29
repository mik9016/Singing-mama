import React, {  useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import classes from './Login.module.scss'
import { Link  } from 'react-router-dom'  



const Login = () => {
    

    return(
        <div className={classes.Login}>
          
          <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2> 
                
                <Form >
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"   />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  />
                    </Form.Group>
                    <Button  className="w-100" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
              </Card.Body>
                
            </Card>  
          <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
    )    
}

export default Login;
