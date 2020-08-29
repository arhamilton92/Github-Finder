import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users';
import './App.css'

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false })
  }

  render() {

    return (
      <div>
        <nav className="navbar bg-primary">
          <Navbar title="Github Finder" icon='fab fa-github' />
        </nav>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }

}

export default App;



// const name = 'John Doe';
// const showName = false;
// const loading = false;

// if loading is true show loading, else show Hello (if showName true Hello name)
// {/* {loading ? <h4>Loading ...</h4> : <h1>Hello {showName && name}</h1>} */}
