import "./App.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import StockMarket from "./StockMarket";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="content">
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/resume">
                Resume
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/stocks">
                Trading Guide
              </NavLink>
            </li>

            <li>
              <a href="https://github.com/SameerKhan5669">Projects</a>
            </li>
          </ul>
          <h1>Sameer Khan</h1>

          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/stocks" component={StockMarket} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
