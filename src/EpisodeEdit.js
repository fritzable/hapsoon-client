import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Redirect } from 'react-router'
import EpisodeForm from './EpisodeForm'

class EpisodeEdit extends Component {
  constructor () {
    super()

    this.state = {
      episode: null,
      updated: false,
      message: ''
    }
  }

  componentDidMount () {
    const { user } = this.props
    const id = this.props.match.params.id
    return axios({
      url: `${apiUrl}/episodes/${id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(response => this.setState({ episode: response.data.episode }))
      .catch(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { episode } = this.state

    const { user } = this.props
    axios({
      url: `${apiUrl}/episodes/${episode._id}`,
      method: 'patch',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { episode }
    })
      .then(() => this.setState({ updated: true }))
      // .catch(() => this.setState({
      // episode: { id: episode.id },
      // message: 'Update failed. Fill forms and try again' }))
      .catch(() => this.setState({
        episode: { ...episode, url: '' },
        message: 'Update failed. Fill forms and try again.'
      }))
  }

  handleChange = event => {
    const updatedEpisode = {
      ...this.state.episode
    }
    updatedEpisode.urls[event.target.name].url = event.target.value

    // const inputName = event.target.name
    // const updatedInputValue = event.target.value
    //
    // const updatedEpisode =
    this.setState({ episode: updatedEpisode
    })
  }

  render () {
    const { episode, updated } = this.state

    if (!this.state.episode) {
      return <p>Loading...</p>
    }

    if (updated) {
      return <Redirect to={`/episodes/${episode._id}`} />
    }

    const { urls } = this.state.episode

    return (
      urls.map((url, i) => {
        return (
          <EpisodeForm
            key={url._id}
            url={url}
            index={i}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )
      })
    )
  }
}

export default EpisodeEdit
