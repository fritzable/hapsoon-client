import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
import { Redirect } from 'react-router'
import { Link, withRouter } from 'react-router-dom'

class Episode extends Component {
  constructor () {
    super()

    this.state = {
      episode: null,
      shouldRedirect: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    const id = this.props.match.params.id
    console.log('id is, ', id)
    return axios({
      url: `${apiUrl}/episodes/${id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(response => this.setState({ episode: response.data.episode }))
      .then(console.log('this.state is', this.state))
      .catch(console.log)
  }

  deleteEpisode = () => {
    const id = this.props.match.params.id
    axios.delete(`${apiUrl}/episodes/${id}`)
      .then(() => this.setState({ shouldRedirect: true }))
      .catch(console.log)
  }

  render () {
    if (!this.state.episode) {
      return <p>Loading...</p>
    }

    if (this.state.shouldRedirect) {
      return <Redirect to={{
        pathname: '/episodes', state: { message: 'successfully deleted episode' }
      }} />
    }
    const { urls } = this.state.episode

    // {this.state.episode.map((episode, episodeIndex) => {
    //   return episode.urls.map((url, urlIndex) => <img key={urlIndex.toString() + episodeIndex.toString()} src={url.url} />)
    // })
    // }

    return (
      <Fragment>
        <div>
          {urls.map((url, urlIndex) => {
            return <img key={urlIndex} src={url.url} />
          })
          }
        </div>
        <button onClick={this.deleteEpisode}>Delete</button>
        <Link to={this.props.match.url + '/edit'}><button>Edit</button></Link>
      </Fragment>
    )
  }
}

export default withRouter(Episode)
