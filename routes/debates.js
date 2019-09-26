const express = require('express');
const DebatesService = require('../services/debates');

const debatesApi = app => {
  const router = express.Router();
  app.use('/api/debates', router);

  const debatesService = new DebatesService();

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const debates = await debatesService.getDebates({ tags });
      res.status(200).json({
        data: debates,
        message: 'debates listed'
      });
    } catch (e) {
      next(e);
    }
  });

  router.get('/:debateId', async (req, res, next) => {
    const { debateId } = req.params
    try {
      const debate = await debatesService.getDebate( debateId );
      res.status(200).json({
        data: debate,
        message: 'debate listed'
      });
    } catch (e) {
      next(e);
    }
  });
};

module.exports = debatesApi;
