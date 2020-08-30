
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

import Home from './components/pages/Home'
import Navbar from "./components/layout/Navbar.jsx";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
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
