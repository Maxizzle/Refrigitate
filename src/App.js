import React from 'react';
import Body from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'

import MobileIntro from './components/MobileIntro'
import './App.css';

function App() {
  return (
    <div className="App">
    
     <Switch>
   
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/MobileTwo' component={MobileTwo} />
        <Route exact path='/MobileThree' component={MobileThree} /> */}


       
        <Home />
      </Switch>
   
    </div>
  );
}

export default App;
