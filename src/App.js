/** @format */

import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

import Navbar from "./components/layout/Navbar.jsx";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import "./App.css";

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <div>
              <Navbar title="Github Finder" icon="fab fa-github" />
            </div>
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

// const name = 'John Doe';
// const showName = false;
// const loading = false;

// if loading is true show loading, else show Hello (if showName true Hello name)
// {/* {loading ? <h4>Loading ...</h4> : <h1>Hello {showName && name}</h1>} */}
