import React,{ useState, useEffect } from 'react';
import './App.css';
//import Header from './components/layout/Header'
import InfoPanel from './components/InfoPanel'
import CountrySelector from './components/CountrySelector'
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [selectCountry, setSelectCountry] = useState('');

	useEffect(() => {
    const fetchCountries = async () =>{
      const response = await fetch('https://disease.sh/v3/covid-19/countries')
      const data = await response.json()
      setCountries(data);
    } 
    fetchCountries()
    if (selectCountry === "") {
      const fetchCountry = async () =>{
        const response = await fetch(`https://disease.sh/v3/covid-19/all`)
        const data = await response.json()
        setCountry(data);
      } 
      fetchCountry()
    }else{
      const fetchCountry = async () =>{
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${selectCountry}`)
        const data = await response.json()
        setCountry(data);
      } 
      fetchCountry()
    }
  },[selectCountry]);

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
				<div className="container">
					<div className="col-md-2 no-gutter">
						<a className="navbar-brand" href="/">Covid Track</a>
					</div>
					<div className="col-md-10 text-right no-gutter">
						<CountrySelector countries={countries} getSelect={(s) => setSelectCountry(s)}/>
					</div>
				</div>
			</nav>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-12 text-center">Covid Tracker</h1>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{paddingTop:20}}>
          <InfoPanel title={'Cases'} today={country.todayCases} total={country.cases}/>
          <InfoPanel title={'Recovered'} today={country.todayRecovered} total={country.recovered}/>
          <InfoPanel title={'Deaths'} today={country.todayDeaths} total={country.deaths}/>
        </div>
      </div>
    </div>
  );
}

export default App;
