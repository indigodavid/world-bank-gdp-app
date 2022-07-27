import { generateCountriesURL } from './API_ROUTES';

const getRegionsFromAPI = async (regionCode) => {
  const response = await fetch(generateCountriesURL(regionCode));
  const unfilteredRegions = await response.json();
  const regions = unfilteredRegions[1];
  return regions;
};

export default getRegionsFromAPI;
