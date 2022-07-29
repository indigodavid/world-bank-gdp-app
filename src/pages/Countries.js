import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Indicator from '../components/Indicator';
import Loading from '../components/Loading';

const Countries = () => {
  const { regionCode } = useParams();
  const countries = useSelector((state) => state.countries)
    .filter((country) => regionCode === country.region.id);
  return (
    <ul className="countries">
      {countries.map((country) => (
        <li key={country.id} className="country">
          <Link to={`/details/${country.id}`}>
            <div className="countryInfo">
              <span className="countryTitle">{country.name}</span>
              <span>
                {<Indicator countryCode={country.id} /> || <Loading />}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
