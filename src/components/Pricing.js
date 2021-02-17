import React from "react";
import classes from "./Pricing.module.scss";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Pricing(props) {
  return (
    <div className={classes.Pricing}>
      <main className="container ">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Angebot</h1>
          <p className="lead">
            Wir bieten sichere Online-Lektionen an, um Ihr Kind für Musik
            sensibilisieren zu können von den ersten Augenblicken an. Wählen Sie
            das richtige Paket für Sie.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fw-normal">Schüchtern</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  €{props.priceItem1}{" "}
                  <small className="text-muted">/Unterricht</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Gruppen Online Unterricht</li>
                  <li>1 Song pro Unterricht</li>
                  <li>Unterricht Materialen per Email geschickt</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  €{props.priceItem2}{" "}
                  <small className="text-muted">/Unterricht</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Gruppen Online Unterricht</li>
                  <li>2 Songs pro Unterricht</li>
                  <li>Unterricht Materialen per Email geschickt</li>
                  <li>Atemübungen</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  €{props.priceItem3}{" "}
                  <small className="text-muted">/Unterricht</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Privat Online Unterricht</li>
                  <li>3 Songs pro Unterricht</li>
                  <li>Unterricht Materialen per Email geschickt</li>
                  <li>Atemübungen</li>
                  <li>Email Support beim Fragen</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.Container}></div>
        </div>
        <Container className="text-center mb-4">
          <NavLink
            to="/kontakt"
            type="button"
            className=" btn btn-outline-primary"
          >
            Termin Vereinbaren
          </NavLink>
        </Container>
      </main>
    </div>
  );
}
