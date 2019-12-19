
import React from 'react';
import Body from './components/screens/Body'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
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
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './components/shared/Header'
import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
