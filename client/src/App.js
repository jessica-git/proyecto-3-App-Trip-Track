import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Service from './service/Auth.service'

import AllTravelsCard from './components/pages/AllTravelsCard'
import Navbar from './components/ui/Navbar'
import Index from './components/pages/Index'
import Profile from './components/pages/Profile'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'


class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this._service = new Service()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log(this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service.loggedin()
        .then(theLoggedInUserFromTheServer => this.setState({ loggedInUser: theLoggedInUserFromTheServer.data }))
        .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
        })
    }
  }


  render() {

    this.fetchUser()

    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} />

        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />
          <Route path="/profile" render={() =>
            this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />
          } />
          <Route exact path="/search/:place" component={AllTravelsCard } />

        </Switch>

      </>

    )
  }
}

export default App;
