import PropTypes from 'prop-types';
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const mapURL = '/maps/';

const mapData = {
  EAS: {
    geoUrl: `${mapURL}world-countries.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [-140.0, -5.0, 10],
    scale: 300,
  },
  ECS: {
    geoUrl: `${mapURL}continents/europe.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [-10.0, -53.0, 0],
    scale: 800,
  },
  LCN: {
    geoUrl: `${mapURL}world-countries.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [90.0, 15.0, 0],
    scale: 370,
  },
  MEA: {
    geoUrl: `${mapURL}world-countries.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [-20.0, -23.0, 0],
    scale: 700,
  },
  NAC: {
    geoUrl: `${mapURL}continents/north-america.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [100.0, -50.0, 0],
    scale: 500,
  },
  SAS: {
    geoUrl: `${mapURL}continents/asia.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [-85.0, -25.0, 0],
    scale: 900,
  },
  SSF: {
    geoUrl: `${mapURL}continents/africa.json`,
    projection: 'geoAzimuthalEqualArea',
    rotate: [-20.0, 10.0, 0],
    scale: 680,
  },
};

const MapChart = (props) => {
  const { region } = props;
  const {
    rotate, scale, geoUrl, projection,
  } = mapData[region];

  return (
    <ComposableMap
      projection={projection}
      projectionConfig={{
        rotate,
        scale,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) => geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
          />
        ))}
      </Geographies>
    </ComposableMap>
  );
};

MapChart.propTypes = {
  region: PropTypes.string.isRequired,
};

export default MapChart;
