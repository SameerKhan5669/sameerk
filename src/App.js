import "./App.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";

function App() {
  return (
    <HashRouter>
      <div>
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
              <NavLink exact to="/technical">
                Stock Market
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/technical">
                Projects
              </NavLink>
            </li>
          </ul>
          <h1>Sameer Khan</h1>

          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
