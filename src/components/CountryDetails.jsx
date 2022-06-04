import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { id } = useParams();
  const countries = props.countries;
  const country = countries.find((item) => {
    return item.alpha3Code === id;
  });
  return <div>{country.name.common}</div>;
};

export default CountryDetails;
