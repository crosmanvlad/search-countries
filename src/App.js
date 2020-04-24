// Crosman Vlad
import React, { useState, useEffect } from 'react';
import logo from './assets/app-icon.svg';
import './App.scss';
import { getCountries, getResults } from './services/apiService';
import SelectCountry from './components/SelectCountry';
import CityInput from './components/CityInput';

function App() {
  const [country, setCountry] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getCountries();
      setCountries(res);
    };
    fetchData();
  }, [query]);

  const handleSelect = (newCountry) => {
    console.log(newCountry);
    setCountry(newCountry);
  }

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  }

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
        Tradeshift Search
      </div>
      <div className="content">
        <div className="title">Tradeshift Global Search</div>
        <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className="search">
          <SelectCountry countries={countries} handleChange={handleSelect}/>
          <CityInput handleSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;
