import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function App () {
    return (
        <div>
          <Nav />
          {/* <Books /> */}
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </Router>
        </div>
    )
}

export default App;
