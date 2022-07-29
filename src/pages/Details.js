import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountryGDP } from '../redux/countries/countries';
import formatCurrency from '../utils/formatCurrency';

const Details = () => {
  const { countryCode } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries)
    .find((country) => country.id === countryCode);
  useState(() => {
    if (country.gdp.length < 2) {
      dispatch(fetchCountryGDP(countryCode));
    }
  }, []);
  const { gdp } = country;

  return (
    <ul className="countries">
      {gdp.map((indicator) => (
        <li key={`${countryCode}-${indicator.date}`} className="country countryInfo">
          <span>
            {'Date: '}
            {indicator.date}
          </span>
          <span>
            {'GDP in Millions: US$ '}
            {indicator.value ? formatCurrency(indicator.value) : 'Data not available'}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Details;
