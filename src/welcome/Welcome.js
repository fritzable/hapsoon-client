import React, { Fragment } from 'react'
import SignUp from '../auth/components/SignUp.js'
import { withRouter } from 'react-router-dom'

const Welcome = (props) => {
  if (props.location.pathname === '/') {
    return <Fragment>
      <div className='welcome'>
        <h2>Engage with your donors.</h2>
        <h6>Post news about your organization.</h6>
        <h6>Interact with invested participants.</h6>
        <h6>Develop valuable relationships.</h6>
      </div>
      <div className='welcomeSignup'>
        <SignUp/>
      </div>
    </Fragment>
  } else {
    return null
  }
}

export default withRouter(Welcome)
