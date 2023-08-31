import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Resume from './Resume.js';
import Home from './Home.js';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends React.Component{
  constructor(){
    super();
  }

  render(){

    return (
      <Router>
      <div>

            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Redirect to ="/" />
      </div >

    </Router>
    );


  }
}


export default App;
