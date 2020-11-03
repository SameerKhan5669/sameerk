import "./App.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import StockMarket from "./StockMarket";
import Projects from "./Projects";
import Social from "./Social";

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
              <NavLink exact to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
          <h1>Sameer Khan</h1>
          <Social />

          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/stocks" component={StockMarket} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
