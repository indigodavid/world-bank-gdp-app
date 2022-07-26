import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const regions = useSelector((state) => state.regions);
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>{region.name}</li>
      ))}
    </ul>
  );
};

export default Home;
