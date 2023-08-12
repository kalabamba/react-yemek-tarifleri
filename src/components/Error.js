import React from 'react'

const Error = ({ error, type="danger" }) => {
  return (
	<div className={`alert alert-${type}`} role="alert">
		{ error }
	</div>
  )
}

export default Error