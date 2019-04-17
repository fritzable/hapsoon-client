import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'

import { Link, withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

class Episodes extends Component {
  constructor () {
    super()

    this.state = {
      episodes: []
    }
  }
  componentDidMount () {
    console.log('episodes component mounted')
    axios.get(apiUrl + '/episodes')
      .then(response => this.setState({
        episodes: response.data.episodes
      }))
      .catch(console.log)
  }

  render () {
    console.log('episodes component render')
    console.log(this.state.episodes)

    // const { urls } = this.state.episodes

    return (
      <Fragment>
        <h4>Episodes:</h4>
        <h5>{this.props.location.state ? this.props.location.state.message : ''}</h5>
        <div>{(this.state.episodes.length === 0) ? <Spinner animation="border" /> : ''}
        </div>
        <ul>
          {this.state.episodes.map(episode => (
            <li key={episode._id}>
              <Link to={'/episodes/' + episode._id}>{episode._id}
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
// withRouter() gives any component access to props.match, props.location
export default withRouter(Episodes)
