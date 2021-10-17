import React from "react";
import './App.css';
// Import route and components
import { Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
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
