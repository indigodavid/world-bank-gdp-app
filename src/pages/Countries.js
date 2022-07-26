import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Indicator from '../components/Indicator';
import Loading from '../components/Loading';

const Countries = () => {
  const { regionCode } = useParams();
  const search = useSelector((state) => state.search);
  const countries = useSelector((state) => state.countries)
    .filter((country) => regionCode === country.region.id);
  const filterCountries = () => countries.filter((country) => {
    if (search.current !== '' && search.current.length > 1) {
      return country.name.toLowerCase().includes(search.current.toLowerCase());
    }
    return true;
  });
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if (search.current === '') {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(filterCountries());
    }
  }, [search]);

  return (
    <ul className="countries">
      {filteredCountries.map((country) => (
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
