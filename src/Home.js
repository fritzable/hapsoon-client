import React, { Fragment } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Route, Link, withRouter } from 'react-router-dom'
import MainCarousel from './MainCarousel.js'

const Home = () => (
  <Fragment>
    <Route exact path='/' component={MainCarousel} />
    <ButtonToolbar>
      <div className="btn"><Link to="/episodes">Episodes</Link>
      </div>
    </ButtonToolbar>
    <Link to="/episodes-create">Add Episode</Link>
  </Fragment>
)

export default withRouter(Home)
