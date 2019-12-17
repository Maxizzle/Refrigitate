import React from 'react';
<<<<<<< HEAD
import Body from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MobileTwo from './components/MobileTwo'
import MobileThree from './components/MobileThree'
import MobileFour from './components/MobileFour'

import MobileIntro from './components/MobileIntro'
=======
import Body from './components/screens/Body'
import Header from './components/shared/Header'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import {Route} from 'react-router-dom'
import Search from './components/Search'
>>>>>>> 0d5e215526bce40e272f6d5c3755f2b9c259bb67
import './App.css';
import { isMetaProperty } from '@babel/types';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    
     <Switch>
   
        <Route exact path='/' component={Home} />
        <Route exact path='/MobileTwo' component={MobileTwo} />
        <Route exact path='/MobileThree' component={MobileThree} />
        <Route exact path='/MobileFour' component={MobileFour} />



       
        <Home />
      </Switch>
   
=======
      <Header />
      <Search />
>>>>>>> 0d5e215526bce40e272f6d5c3755f2b9c259bb67
    </div>
  );
}

export default App;
