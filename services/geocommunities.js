const db = require('db');
const config = require('../../db/config');

const { continentsMock } = require('../utils/mocks/continents');
const { countriesMock } = require('../utils/mocks/countries');

class GeocommunityService {
  constructor() {
    console.log('Esto siempre se llama sin se llamado');
  }
  async getContinents() {
    const continents = await Promise.resolve(continentsMock);
    return continents || [];
  }
  async getCountriesByContinent(continent) {
    const result = await Promise.resolve(countriesMock);
    const countries = result.filter(item => item.region === continent);
    return countries || [];
  }
}

module.exports = GeocommunityService;
