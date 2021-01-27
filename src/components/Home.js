import React from 'react';
import classes from './Home.module.scss';
import { Link } from 'react-router-dom';
import changeNavColorBlack from './Navigation'

export default function Home() {


    return (
    <div className={classes.Home}>
        <main className="px-3">
            
            <h1>Singing-Mama</h1><br/>
            <p className="lead">
                Extraordinary way to make childhood of your children beautiful from his/her very first moments.<br/>
                Make your child sensitive to music from the very beginning.
            </p>
            
            <Link to='/about' type="button" class="btn btn-outline-primary" onClick={changeNavColorBlack}>Learn More</Link>           
        

        </main>
    </div>
    )
}
