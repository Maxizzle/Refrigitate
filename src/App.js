import React from 'react';
import Body from './components/screens/Body'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MobileTwo from './components/MobileTwo'
import MobileThree from './components/MobileThree'
import MobileFour from './components/MobileFour'

import MobileIntro from './components/MobileIntro'
import './App.css';
import { isMetaProperty } from '@babel/types';

function App() {
  return (
    <div className="App">
    
     <Switch>
   
        <Route exact path='/' component={Home} />
        <Route exact path='/MobileTwo' component={MobileTwo} />
        <Route exact path='/MobileThree' component={MobileThree} />
        <Route exact path='/MobileFour' component={MobileFour} />



       
        <Home />
      </Switch>
   
    </div>
  );
}

export default App;
