import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Home2 from "./components/Home2";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Kontakt from "./components/Kontakt";
import TestNav from "./TestNav";
import Payment from "./components/Payment";
import { useState, useEffect, useRef } from "react";
import classes from "./App.scss";

function App(props) {
  const [navBg, setNavBg] = useState("");
  const [navVariant, setNavVariant] = useState("");
  const priceItem1 = "10";
  const priceItem2 = "20";
  const priceItem3 = "30";



  useEffect(() => {
    window.addEventListener("resize", () => {
     
      setNavVariant("dark");
    });

    return () => {
      window.addEventListener("resize", () => {
        setNavVariant("dark");
      });
    };
  }, []);

  return (
    <Router>
      <div className={classes.App}>
        <Navigation variant={navVariant} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" >
            <Home2 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing">
            <Pricing
              priceItem1={priceItem1}
              priceItem2={priceItem2}
              priceItem3={priceItem3}
            />
          </Route>
          <Route path="/kontakt">
            <Kontakt
              pricePackage1={priceItem1}
              pricePackage2={priceItem2}
              pricePackage3={priceItem3}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/testNav">
            <TestNav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
