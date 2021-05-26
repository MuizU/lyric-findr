import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import Footer from './components/layout/Footer'
import { Provider } from './context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
        <Navbar/>
          <div className="container">
            <Switch>
            <Route exact path="/" component={Index}/>
              <Route exact path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        </React.Fragment>
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;
