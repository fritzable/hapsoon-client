import React, { Fragment } from 'react'

const CreateForm = (
  { index, url, handleChange, handleSubmit }
) => (
  <Fragment>
    <form-group>
      <form onSubmit={handleChange}>
        <label htmlFor="new">Url:
          <button type="submit">New Url</button>
        </label>
      </form>
    </form-group>
  </Fragment>
)

export default CreateForm
