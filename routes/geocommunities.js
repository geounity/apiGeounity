const express = require('express');
const GeocommunitiesService = require('../services/geocommunities');

const geocommunitiesApi = app => {
  const router = express.Router();
  app.use('/api/geocommunities', router);

  const geocommunitiesService = new GeocommunitiesService();

  router.get('/continents', async (req, res, next) => {
    try {
      const continents = await geocommunitiesService.getContinents();
      res.status(200).json({
        data: continents,
        message: 'continents listed'
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/:continent/countries', async (req, res, next) => {
    try {
      const continent = req.params.continent
      const countries = await geocommunitiesService.getCountriesByContinent(continent);
      res.status(200).json({
        data: countries,
        message: 'countries listed'
      });
    } catch (e) {
      next(e);
    }
  });

};

module.exports = geocommunitiesApi;
