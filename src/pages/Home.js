import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Indicator from '../components/Indicator';
import Loading from '../components/Loading';
import MapChart from '../components/MapChart';

const Home = () => {
  const regions = useSelector((state) => state.regions);

  return (
    <ul className="regions">
      {regions.map((region) => (
        <li key={region.code} className="region">
          <Link to={`/countries/${region.code}`}>
            <div>
              {<MapChart region={region.code} /> || <Loading />}
            </div>
            <div className="regionInfo">
              <span className="regionTitle">{region.name}</span>
              <span>
                {<Indicator regionCode={region.code} /> || <Loading />}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
