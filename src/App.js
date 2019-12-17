import React from 'react';
import Body from './components/screens/Body'
import Header from './components/shared/Header'
import Nav from './components/shared/Nav'
import Footer from './components/shared/Footer'
import {Route} from 'react-router-dom'
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
