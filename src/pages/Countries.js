import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Indicator from '../components/Indicator';

const Countries = () => {
  const { regionCode } = useParams();
  const countries = useSelector((state) => state.countries)
    .filter((country) => regionCode === country.region.id);
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id} className="country">
          <span>{country.name}</span>
          {' '}
          <span>{country.id}</span>
          <span>GDP:</span>
          <Indicator countryCode={country.id} />
          <Link to={`/details/${country.id}`}>{country.id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
