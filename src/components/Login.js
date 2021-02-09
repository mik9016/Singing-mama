
import { Form, Button, Card, Alert } from 'react-bootstrap';
import classes from './Login.module.scss'





const Login = () => {
    

    return(
    <div className={classes.Login}>
        <Form>
            <Card>
                <Card.Body>
                    <input type='text'/>
                    <input type='email'/>
                    <Button type="button" className="btn btn-outline-primary">Login</Button>
                </Card.Body>   
            </Card>

        </Form>
      
  



    </div> 
    )    
}

export default Login;
