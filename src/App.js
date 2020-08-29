import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css'

class App extends Component {

  state = {
    users: [],
    loading: false
  }


  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  }

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  render() {

    const { users, loading } = this.state;
    return (
      <div>
        <nav className="navbar bg-primary">
          <Navbar title="Github Finder" icon='fab fa-github' />
        </nav>
        <div className='container'>
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={ users.length > 0 ? true : false }
          />
          <Users loading={loading} users={users}/>
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
