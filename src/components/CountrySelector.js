import React,{ useState } from 'react'

function CountrySelector(props) {
	const [text, setText] = useState('')

	const onChange = (s) => {
		setText(s)
		props.getSelect(s)
	}
	return (
		<div className="text-right countrySelector">
			<form className="">
				<div className="form-group">
					<label htmlFor="country_selector" className="countrySelector__label">Country: </label>
					<select id="country_selector" value={text} onChange={(e) => onChange(e.target.value)}>
						<option value="">WorldWide</option>
						
						{props.countries.map(country => (
							<option key={country.country} value={country.country}>{country.country}</option>
						))}
					</select>
				</div>
			</form>
		</div>
	)
}

export default CountrySelector