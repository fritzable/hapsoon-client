import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Redirect } from 'react-router'
import CreateForm from './CreateForm'
import SubmitForm from './SubmitForm'

class EpisodeCreate extends Component {
  constructor () {
    super()

    this.state = {
      episode: null,
      created: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    // const id = this.props.match.params.id
    return axios({
      url: `${apiUrl}/episodes/`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { 'episode': {
        'urls':
      [{}]
      }
      }
    })
      .then(response => this.setState({
        episode: response.data.episode,
        created: true,
        message: 'created episode. now add images.' }))
      .catch(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user } = this.props
    const { episode } = this.state
    axios({
      url: `${apiUrl}/episodes`,
      method: 'post',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { 'episode': {
        'urls':
      [{}]
      }
      }
    })
      // Setting new state and including a created id
      .then(response => this.setState({
        created: true
        // episode: response.data.episode
      }))
      .catch(() => this.setState({
        episode: { ...episode, urls: [] }
        // message: 'Create failed. Fill forms and try again.'
      }))
  }

  handleChange = event => {
    const updatedUrls = []
    return updatedUrls.push(event.target.value)
  }

  render () {
    const { episode, created } = this.state

    // if (!this.state.episode) {
    //   return <p>Loading...</p>
    // }
    if (created) {
      return <Redirect to={{
        pathname: `/episodes/${episode._id}`, state: { message: 'created episode' }
      }} />
      // return <Redirect to={{
      //   pathname: '/episodes', state: { message: 'created episode. Click the episode that was just created to add images.' }
      // }} />
    }

    // const { urls } = this.state.episode
    //
    // return (
    //   urls.map((url, i) => {
    return (
      <Fragment>
        <CreateForm
        // key={url._id}
        // url={url}
        // index={i}
          handleChange={this.handleChange}
        />
        <SubmitForm
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

export default EpisodeCreate
