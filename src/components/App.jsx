//* import React
import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

//* Other import
import "../styles/index.css"; // style file
import axios from "axios"; // http request

//* Component
import NavBar from "./NavBar";
import Users from "./Users";
import Search from "./Search";
import About from "./About";
import UserDatails from "./UserDatails";

export class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getUserRepos = this.getUserRepos.bind(this);
    this.state = {
      loading: true,
      users: [],
      user: {},
      repos: [],
      alert: null,
    };
  }
  clearUsers() {
    this.setState({
      users: [],
      loading: true,
    });
  }
  getUser(username) {
    this.setState({ loading: true });
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      this.setState({
        user: res.data,
        loading: false,
      });
    });
  }
  getUserRepos(username) {
    this.setState({ loading: true });
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      this.setState({
        repos: res.data,
        loading: false,
      });
    });
  }
  setAlert(msg, type) {
    this.setState({
      alert: { msg, type },
    });
    if (type == "error") {
      const err = () => toast.error(`${msg}`);
      err();
    }
    if (type == "success") {
      const err = () => toast.success(`${msg}`);
      err();
    }
  }
  searchUsers(keyword) {
    this.setState({ loading: true });
    if (keyword !== "") {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          this.setState({
            users: res.data.items,
            loading: false,
          });
        });
    } else {
      axios.get("https://api.github.com/users").then((res) => {
        this.setState({
          users: res.data,
          loading: false,
        });
      });
    }
  }
  render() {
    return (
      <Router>
        <div className='flex flex-col items-center px-2'>
          <NavBar title='Github Finder' />
          <Toaster position='bottom-left' reverseOrder={false} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClearBtn={this.state.users}
                    setAlert={this.setAlert}
                    alert={this.state.alert}
                  />
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </>
              )}
            />
            <Route path='/about' component={About} />
            <Route
              path='/user/:login'
              render={(props) => (
                <UserDatails
                  {...props}
                  getUser={this.getUser}
                  user={this.state.user}
                  getUserRepos={this.getUserRepos}
                  repos={this.state.repos}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
