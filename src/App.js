import React from 'react';
import Body from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MobileTwo from './components/MobileTwo'
import MobileThree from './components/MobileThree'
import MobileFour from './components/MobileFour'
// import './TagsInput.scss';
import TagsInput from './components/TagsInput';
import './App.css';
import MobileIntro from './components/MobileIntro'
import { isMetaProperty } from '@babel/types';


function App() {
  return (
    <div className="App">
    {/* <Tag /> */}
     <Switch>
   
        <Route exact path='/' component={Home} />
        <Route exact path='/MobileTwo' component={MobileTwo} />
        <Route exact path='/MobileThree' component={MobileThree} />
        <Route exact path='/MobileFour' component={MobileFour} />
        <Route exact path='/TagsInput' component={TagsInput} />

      


       <TagsInput />
        <Home />
      </Switch>
   
    </div>
  );
}

export default App;
