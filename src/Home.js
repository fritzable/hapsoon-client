import React, { Fragment } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import { Route, Link, withRouter } from 'react-router-dom'
import MainCarousel from './MainCarousel.js'

const Home = () => (
  <Fragment>
    <section>
      <div>
        <Route exact path='/' component={MainCarousel} />
      </div>
      <ButtonToolbar>
        <div className="btn"><Link to="/episodes-create">Add Episode</Link>
        </div>
        <div className="btn"><Link to="/episodes">List of Episodes</Link>
        </div>
      </ButtonToolbar>
    </section>
  </Fragment>
)

export default withRouter(Home)
