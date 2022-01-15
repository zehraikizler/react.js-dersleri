import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "white" }}
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "white" }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ backgroundColor: "black", color: "white" }}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
