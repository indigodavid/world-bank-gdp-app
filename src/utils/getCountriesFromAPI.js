import { generateCountriesURL } from './API_ROUTES';

const getCountriesFromAPI = async (regionCode) => {
  const response = await fetch(generateCountriesURL(regionCode));
  const data = await response.json();
  const countries = data[1];
  return countries;
};

export default getCountriesFromAPI;
