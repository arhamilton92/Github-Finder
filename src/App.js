import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css'

class App extends Component {

  render() {

    return (
      <nav className="navbar bg-primary">
        <Navbar title="Github Finder" icon='fab fa-github' />
      </nav>
    );
  }

}

export default App;



// const name = 'John Doe';
// const showName = false;
// const loading = false;

// if loading is true show loading, else show Hello (if showName true Hello name)
// {/* {loading ? <h4>Loading ...</h4> : <h1>Hello {showName && name}</h1>} */}
