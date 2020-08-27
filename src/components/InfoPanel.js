import React from 'react'

function InfoPanel(props) {
	return (
		<div className="col-md info-panel">
			<div className="col-md-12 card">
				<div className="card-body">
					<div className="card-title text-center text-strong"><strong>{props.title}</strong></div>
					<p><strong>Total: </strong>{props.total}</p>
					<p><strong>Today: </strong>{props.today}</p>
				</div>
			</div>
		</div>
	)
}

export default InfoPanel
