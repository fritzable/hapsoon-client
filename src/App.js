import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './apiConfig'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Episodes from './Episodes'
import Episode from './Episode'
import Home from './Home'
import EpisodeEdit from './EpisodeEdit'
import EpisodeCreate from './EpisodeCreate'
import Welcome from './welcome/Welcome'

// import Alert from 'react-bootstrap/Alert'
import { AlertList } from 'react-bs-notifier'
// dont forget to npm i react-bs-notifier

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      timeout: 2000,
      position: 'bottom-left'
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type, headline = '', timeout = 2000) => {
    const newAlert = {
      id: (new Date()).getTime(),
      type: type,
      headline: headline,
      message: message
    }

    this.setState(prevState => ({
      alerts: [...prevState.alerts, newAlert]
    }), () => {
      setTimeout(() => {
        const index = this.state.alerts.indexOf(newAlert)
        if (index >= 0) {
          this.setState(prevState => ({
            // remove the alert from the array
            alerts: [...prevState.alerts.slice(0, index), ...prevState.alerts.slice(index + 1)]
          }))
        }
      }, timeout)
    })
  }

  call () {
    axios.get(apiUrl + '/examples')
      .then(response => this.setState({
        episodes: response.data.episodes
      }))
      .catch(console.log)
  }

  render () {
    const { alerts, user, timeout, position } = this.state

    return (
      <React.Fragment>
        <Header user={user} />

        <AlertList
          position={position}
          alerts={alerts}
          timeout={timeout}
        />
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} exact path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes' render={() => (
            <Episodes alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes/:id' render={({ match }) => (
            <Episode alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes/:id/edit' render={({ match }) => (
            <EpisodeEdit alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes-create' render={({ match }) => (
            <EpisodeCreate alert={this.alert} user={user} match={match}/>
          )} />
          <div className='welcomeContainer'>
            { user ? <Home/> : <Welcome/>}
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default App
