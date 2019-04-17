import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Episodes from './Episodes'
import Episode from './Episode'

import Alert from 'react-bootstrap/Alert'
import { AlertList } from 'react-bs-notifier'

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

  render () {
    const { alerts, user, timeout, position } = this.state

    return (
      <React.Fragment>
        <Header user={user} />

        <AlertList
          position={position}
          alerts={alerts}
          timeout={timeout} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes' render={() => (
            <Episodes alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/episodes/:id' render={({ match }) => (
            <Episode alert={this.alert} user={user} match={match}/>
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
