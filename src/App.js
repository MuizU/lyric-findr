import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import { Provider } from './context'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment className="App">
        <Navbar/>
          <div className="container">
            <Switch>
            <Route exact path="/" component={Index}/>
            </Switch>
          </div>
        </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
