import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGDP } from '../redux/regions/regions';
import { fetchCountryGDP } from '../redux/countries/countries';
import formatCurrency from '../utils/formatCurrency';
// import formatCurrency from '../utils/formatCurrency';

const Indicator = (props) => {
  const { regionCode, countryCode } = props;
  const dispatch = useDispatch();
  if (regionCode) {
    const regions = useSelector((state) => state.regions);
    const region = regions.find((region) => region.code === regionCode);

    useEffect(() => {
      dispatch(fetchGDP(regionCode));
    }, []);

    return (
      <span>
        {'GDP in millions: $US '}
        {region.gdp[0]?.value ? formatCurrency(region.gdp[0].value) : 'No Data'}
      </span>
    );
  }

  if (countryCode) {
    const countries = useSelector((state) => state.countries);
    const country = countries.find((country) => country.id === countryCode);

    useEffect(() => {
      dispatch(fetchCountryGDP(countryCode));
    }, []);

    return (
      <span>
        {'GDP in millions: $US '}
        {country.gdp[0] !== 0 ? formatCurrency(country.gdp[0].value) : 'No Data'}
      </span>
    );
  }

  return (
    <span>Incorrect country or region</span>
  );
};

Indicator.propTypes = {
  regionCode: PropTypes.string,
  countryCode: PropTypes.string,
};

Indicator.defaultProps = {
  regionCode: '',
  countryCode: '',
};

export default Indicator;
