import React, { Fragment } from 'react'

const SubmitForm = (
  { index, url, handleChange, handleSubmit }
) => (
  <Fragment>
    <form-group>
      <form onSubmit={handleSubmit}>
        <label htmlFor="urls">Url:
          <input/>
          <button onClick={handleChange}>Add Url</button>
        </label>
      </form>
      <button type="submit">Submit</button>
    </form-group>
  </Fragment>
)

export default SubmitForm
