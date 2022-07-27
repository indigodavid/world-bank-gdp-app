import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGDP } from '../redux/regions/regions';

const Home = () => {
  const regions = useSelector((state) => state.regions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (regions.length !== 0) {
      regions.forEach((region) => {
        if (region.gdp.length < 2) {
          dispatch(fetchGDP(region.code));
        }
      });
    }
  }, []);

  useMemo(() => {
    regions.forEach((region) => {
      if (region.gdp.length < 2) {
        dispatch(fetchGDP(region.code));
      }
    });
  }, [{ regions }]);

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.code} className="region">
          <span>{region.name}</span>
          {' '}
          <span>{region.code}</span>
          <span>GDP:</span>
          <span>{region.gdp[0] !== 0 ? region.gdp[0].value : 'No Data'}</span>
          <Link to={`/countries/${region.code}`}>{region.code}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
