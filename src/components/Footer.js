import React from 'react'
import classes from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={classes.Footer}> 
            <footer className="footer  py-3 bg-light mt-auto " style={{width:"100vw"}}>
                <div className="container">
                    <span className="text-muted">Footer</span>
                </div>
            </footer>
        </div>
    )
}
