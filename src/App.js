import React from "react";
import './App.css';
// Import route and components
import { Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";


function App() {
  return (
    <div className="App">
      <Route path="/">
        <Main />
      </Route>
      <Route path="/stocks">
        <Stocks />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
