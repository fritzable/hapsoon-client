import React, { Fragment } from 'react'

const EpisodeForm = (
  { index, url, handleChange, handleSubmit }
) => (
  <Fragment>
    <form onSubmit={handleSubmit}>
      <label htmlFor="urls">Url:
        <input name={index} onChange={handleChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  </Fragment>
)

export default EpisodeForm
