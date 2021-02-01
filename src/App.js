import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import Payment from './components/Payment';
import { useState, useEffect } from 'react';



function App(props) {
  const [navStyle, setNavstate] = useState('navbar fixed-top navbar-dark')
  const priceItem1 = '10';
  const priceItem2 = '20';
  const priceItem3 = '30';

  function changeNavColorBlack() {
    setNavstate('navbar fixed-top navbar-light')
  }
  
  function changeNavColorWhite() {
    setNavstate('navbar fixed-top navbar-dark')
  }

  function setItemName() {

  }
  function setItemPrice(){

  }

  return (
    <Router>
      <div>
      <Navigation changeNavColorBlack={changeNavColorBlack}
              changeNavColorWhite={changeNavColorWhite}
              navStyle={navStyle}
              setNavstate={setNavstate}/>
        <Switch>
        <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route path='/home'>
          <Home changeNavColorBlack={changeNavColorBlack}
              changeNavColorWhite={changeNavColorWhite}/>
          </Route>
          <Route path='/about'>
            <About changeNavColorBlack={changeNavColorBlack}/>
          </Route>
          <Route path='/pricing'> 
            <Pricing priceItem1={priceItem1} priceItem2={priceItem2} priceItem3={priceItem3}/>
          </Route>
          <Route path='/kontakt'>
            <Kontakt 
              changeNavColorBlack={changeNavColorBlack}
/>
          </Route>
          <Route path='/login'>
            <Login changeNavColorBlack={changeNavColorBlack}/>
          </Route>
          <Route path='/payment'>
            <Payment 
              changeNavColorBlack={changeNavColorBlack} 
              price={priceItem2}
              />
          </Route>

        </Switch>
       <Footer/>
      </div>
    </Router>


  );
}

export default App;
