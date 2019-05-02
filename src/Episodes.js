import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './apiConfig'
// import Image from 'react-bootstrap/Image'

import { Link, withRouter } from 'react-router-dom'

class Episodes extends Component {
  constructor () {
    super()

    this.state = {
      episodes: []
    }
  }
  componentDidMount () {
    axios.get(apiUrl + '/episodes')
      .then(response => this.setState({
        episodes: response.data.episodes
      }))
      .catch(console.log)
  }

  render () {
    // const { urls } = this.state.episodes

    // <Image
    //   src="https://cff2.earth.com/uploads/2019/01/23121937/Fake-GPS-turtle-eggs-are-being-used-to-help-track-wildlife-poachers-730x410.jpg"
    //   alt="Sea turtle"
    //   roundedCircle
    //   fluid
    // />
    return (
      <Fragment>
        <section className='banner'>
          <div>
            <h4>Episodes:</h4>
          </div>
        </section>
        <h5>{this.props.location.state ? this.props.location.state.message : ''}</h5>
        <div>{(this.state.episodes.length === 0)
          ? <p>No episodes yet. Click {<Link to="/episodes-create">Add Episode</Link>}.</p>
          : ''}
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
