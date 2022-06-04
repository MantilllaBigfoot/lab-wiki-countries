import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountryDetails from './components/CountryDetails.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col">
            <CountriesList countries={countries} />
          </div>
          <div class="col">
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
