import { generateCountryURL } from './API_ROUTES';

const getCountryFromAPI = async (code) => {
  const response = await fetch(generateCountryURL(code));
  const data = await response.json();
  return data[1];
};

export default getCountryFromAPI;
