import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar.jsx';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About'

import './App.css'

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }


  // Search Github Users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  }

    //get a single github user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false })
  }

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {

    const { users, user, loading } = this.state;
    return (
      <Router>
        <div>
          <div>
            <Navbar title="Github Finder" icon='fab fa-github' />
          </div>
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={ users.length > 0 ? true : false }
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users}/>
                </Fragment>
              )} 
              />
              <Route exact path='/about' component={About}></Route>
              <Route 
                exact path='/user/:login' 
                render={props => (
                <User 
                { ...props } 
                getUser={this.getUser} 
                user={user} 
                loading={loading}/>
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;



// const name = 'John Doe';
// const showName = false;
// const loading = false;

// if loading is true show loading, else show Hello (if showName true Hello name)
// {/* {loading ? <h4>Loading ...</h4> : <h1>Hello {showName && name}</h1>} */}
