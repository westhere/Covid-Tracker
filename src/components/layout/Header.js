import React from 'react'
import CountrySelector from '../CountrySelector'

function Header(props,countrySelect) {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<div className="col-md-2 no-gutter">
						<a className="navbar-brand" href="/">Logo</a>
					</div>
					<div className="col-md-10 text-right no-gutter">
						<CountrySelector countries={props.countries} countrySelect={props.countrySelect}/>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
