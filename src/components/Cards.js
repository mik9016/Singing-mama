import React from 'react'
import { Card } from 'react-bootstrap'
import classes from './Cards.module.scss'
 
export default function Cards() {
    return (
      <div className={classes.Cards}>
<div className="col">
      <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 fw-normal">Free</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-primary">Add to card</button>
      </div>
      
    </div>       
      </div>
      </div>
    )
}
