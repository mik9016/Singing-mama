import React from 'react';
import classes from './Home.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'


export default function Home() {

    
    

    return (
    <div className={classes.Home}>
        <main className="px-3">
            
            <h1>Singing-Mama</h1><br/>
            <p className="lead">
                Extraordinary way to make childhood of your children beautiful from his/her very first moments.<br/>
                Make your child sensitive to music from the very beginning.
            </p>
            
            <NavLink to={{
                pathname:'/about',
                aboutProps:{
                    navColor: 'navbar fixed-top navbar-light'
                }
            }} type="button" className="btn btn-outline-primary" >Learn More</NavLink>           
        

        </main>
    </div>
    )
}
