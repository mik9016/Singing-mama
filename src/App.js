import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Kontakt from './components/Kontakt';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";


function App(props) {

  // const [navStyle, setNavstyle] = useState('navbar fixed-top navbar-dark')
  
  

  // function changeNavColorWhite() {

  //   setNavstate('navbar fixed-top navbar-dark')
  // }
// const navColorWhite= 'navbar fixed-top navbar-dark'
// const navColorBlack= 'navbar fixed-top navbar-light'

  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
        <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/pricing'>
            <Pricing/>
          </Route>
          <Route path='/kontakt'>
            <Kontakt/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>

        </Switch>
       
      </div>
    </Router>


  );
}

export default App;
