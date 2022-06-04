import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {props.countries.map((country) => (
          <li key={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
