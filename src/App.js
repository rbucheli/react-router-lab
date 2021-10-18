import React from "react";
import "./App.css";
// Import route and components
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Dashboard from "./pages/Dashboard";
import stocks from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Dashboard />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => <Stocks {...routerProps} />}
        />
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
