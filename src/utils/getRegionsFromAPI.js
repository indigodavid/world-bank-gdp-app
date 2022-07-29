import { REGIONS_URL } from './API_ROUTES';

const getRegionsFromAPI = async () => {
  const response = await fetch(REGIONS_URL);
  const unfilteredRegions = await response.json();
  const regions = unfilteredRegions[1].filter((region) => region.id);
  return regions;
};

export default getRegionsFromAPI;
