// import React, { Component } from 'react'
// import axios from 'axios'
// import apiUrl from './apiConfig'
// import { Redirect } from 'react-router'
// import EpisodeForm from './EpisodeForm'
//
// class EpisodeEdit extends Component {
//   constructor () {
//     super()
//
//     this.state = {
//       episode: null,
//       updated: false,
//       message: ''
//     }
//   }
//
//   componentDidMount () {
//     const { user } = this.props
//     const id = this.props.match.params.id
//     return axios({
//       url: `${apiUrl}/episodes/${id}`,
//       method: 'GET',
//       headers: {
//         'Authorization': `Token token=${user.token}`
//       }
//     })
//       .then(response => this.setState({ episode: response.data.episode }))
//       .catch(console.log)
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault()
//
//     const { episode } = this.state
//
//     const { user } = this.props
//     axios({
//       url: `${apiUrl}/episodes/${episode._id}`,
//       method: 'patch',
//       headers: {
//         'Authorization': `Token token=${user.token}`
//       },
//       data: { episode }
//     })
//       .then(() => this.setState({ updated: true }))
//       // .catch(() => this.setState({
//       // episode: { id: episode.id },
//       // message: 'Update failed. Fill forms and try again' }))
//       .catch(() => this.setState({
//         episode: { ...episode, url: '' },
//         message: 'Update failed. Fill forms and try again.'
//       }))
//   }
//
//   handleChange = event => {
//     const updatedEpisode = {
//       ...this.state.episode
//     }
//     updatedEpisode.urls[event.target.name].url = event.target.value
//
//     // const inputName = event.target.name
//     // const updatedInputValue = event.target.value
//     //
//     // const updatedEpisode =
//     this.setState({ episode: updatedEpisode
//     })
//   }
//
//   render () {
//     const { episode, updated } = this.state
//
//     if (!this.state.episode) {
//       return <p>Loading...</p>
//     }
//
//     if (updated) {
//       return <Redirect to={`/episodes/${episode._id}`} />
//     }
//
//     const { urls } = this.state.episode
//
//     return (
//       urls.map((url, i) => {
//         return (
//           <EpisodeForm
//             key={url._id}
//             url={url}
//             index={i}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//           />
//         )
//       })
//     )
//   }
// }
//
// export default EpisodeEdit

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
      created: false,
      message: ''
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
        created: true,
        episode: response.data.episode
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
    // const { episode, created } = this.state

    // if (!this.state.episode) {
    //   return <p>Loading...</p>
    // }
    if (this.state.created) {
      return <Redirect to={{
        pathname: '/episodes', state: { message: 'created episode. Click the episode that was just created to add images.' }
      }} />
    }
    // if (created) {
    //   return <Redirect to={`/episodes/${episode._id}`} />
    // }

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
