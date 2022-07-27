import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { country } = useParams();
  return (
    <div>
      {country}
    </div>
  );
};

export default Details;
