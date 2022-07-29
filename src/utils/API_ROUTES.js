const JSON_FORMAT = '?format=json';
const BASE_URL = 'https://api.worldbank.org/v2/';
const REGIONS_URL = `${BASE_URL}region/${JSON_FORMAT}`;
const GDP_INDICATOR = 'NY.GDP.MKTP.CD';

const generateCountryURL = (countryCode) => (
  `${BASE_URL}/country/${countryCode}/${JSON_FORMAT}`
);

const generateCountryGdpURL = (countryCode) => (
  `${BASE_URL}/country/${countryCode}/indicator/${GDP_INDICATOR}${JSON_FORMAT}`
);

const generateCountriesURL = (regionCode) => (
  regionCode
    ? `${BASE_URL}/country${JSON_FORMAT}&region=${regionCode}&per_page=300`
    : `${BASE_URL}/country${JSON_FORMAT}&per_page=300`
);

export {
  BASE_URL,
  REGIONS_URL,
  generateCountryGdpURL,
  generateCountryURL,
  generateCountriesURL,
};
