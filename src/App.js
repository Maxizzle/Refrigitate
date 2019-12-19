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
