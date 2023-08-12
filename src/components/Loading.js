import React from 'react'
import './Loading.css'

const Loading = () => {
	return (
		<div className="row mt-5 d-flex justify-content-center align-items-center">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
		
	)
}

export default Loading