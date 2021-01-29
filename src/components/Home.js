import React from 'react';
import classes from './Home.module.scss';
import { NavLink } from 'react-router-dom';



export default function Home(props) {

    const {changeNavColorBlack} = props;
    
    

    return (
    <div className={classes.Home}>
        <main className="px-3">
            
            <h1>Singing-Mama</h1><br/>
            <p className="lead">
                Extraordinary way to make childhood of your children beautiful from his/her very first moments.<br/>
                Make your child sensitive to music from the very beginning.
            </p>
            
            <NavLink to='/about' 
                type="button" 
                className="btn btn-outline-primary"
                onClick={changeNavColorBlack}> 
                Learn More
                
            </NavLink>           
        

        </main>
    </div>
    )
}
