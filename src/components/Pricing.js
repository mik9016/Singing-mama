import React from 'react'
import classes from './Pricing.module.scss'
import Cards from './Cards'
import { NavLink } from 'react-router-dom';

export default function Pricing(props) {


    return (
        <div className={classes.Pricing}>
       
<main className="container ">
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4" >Pricing</h1>
    <p className="lead">We offer safe online lessons to make your child sensible to sounds from the very first moments. Pick the package right for you.</p>
  </div>

  <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div className="col">
      <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 fw-normal">Free</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.priceItem1} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </ul>
        <NavLink to='/kontakt' type="button" className="w-100 btn btn-outline-primary">Termin Vereinbaren</NavLink>
      </div>
      
    </div>
    </div>
    <div className="col">
      <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 fw-normal">Pro</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.priceItem2} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </ul>
        <NavLink to='/kontakt' type="button" className="w-100 btn btn-outline-primary">Termin Vereinbaren</NavLink>
      </div>
    </div>
    </div>
    <div className="col">
      <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 fw-normal">Enterprise</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.priceItem3} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>
        </ul>
        <NavLink to='/kontakt' type="button" className="w-100 btn btn-outline-primary">Termin Vereinbaren</NavLink>
      </div>
    </div>
    </div>
  </div>

 
</main>
</div>
    )
}
