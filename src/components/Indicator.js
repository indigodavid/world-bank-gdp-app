import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGDP } from '../redux/regions/regions';

const Indicator = (props) => {
  const regions = useSelector((state) => state.regions);
  const { regionCode } = props;
  const dispatch = useDispatch();
  const region = regions.find((region) => region.code === regionCode);
  useEffect(() => {
    dispatch(fetchGDP(regionCode));
  }, []);

  return (
    <span>{region.gdp[0] !== 0 ? region.gdp[0].value : 'No Data'}</span>
  );
};

Indicator.propTypes = {
  regionCode: PropTypes.string.isRequired,
};

export default Indicator;
