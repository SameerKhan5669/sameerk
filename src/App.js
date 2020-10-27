import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

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
              <NavLink exact to="/technical">
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
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
