
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Kontakt from './components/Kontakt';

function App() {

  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
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
