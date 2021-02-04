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
            Außergewöhnliche Art,<br/> die Kindheit Ihrer Kinder von Anfang an schön zu machen.<br/>
            Machen Sie Ihr Kind von Anfang an sensibel für Musik.
            </p>
            
            <NavLink to='/about' 
                type="button" 
                className="btn btn-outline-primary"
                onClick={changeNavColorBlack}> 
                Mehr
                
            </NavLink>           
        

        </main>
    </div>
    )
}
