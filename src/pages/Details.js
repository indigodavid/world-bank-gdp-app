import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const { country } = props;
  return (
    <div>
      {country}
    </div>
  );
};

Details.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Details;
