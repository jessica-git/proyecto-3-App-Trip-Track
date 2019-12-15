import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthService from './service/Auth.service'

import Navbar from './components/ui/Navbar'
import Index from './components/pages/Index'
import Profile from './components/pages/Profile'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

import AllTravelsCard from './components/pages/AllTravelsCard'
import TravelCard from "./components/pages/TravelCard"
import TravelDays from "./components/pages/TravelDays"
import MyTravelList from "./components/pages/MyTravelList"
import TravelForm from "./components/pages/TravelForm"



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
    this.AuthService = new AuthService()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log(this.state.loggedInUser)
  }

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.AuthService.loggedin()
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

          <Route exact path="/search/:place" component={AllTravelsCard} />
          <Route exact path="/travel/:place/:id" render={(props) =>
            <TravelCard {...props} loggedInUser={this.state.loggedInUser} />
          } />
          <Route exact path="/detailsTravel/:day" component={TravelDays} />
          <Route exact path="/myTravels" render={() =>
            this.state.loggedInUser ? <MyTravelList loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />
          } />
          <Route exact path="/new" render={() =>
            this.state.loggedInUser ? <TravelForm loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />
          } />


        </Switch>

      </>

    )
  }
}

export default App;
