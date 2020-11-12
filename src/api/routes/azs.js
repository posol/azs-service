const express = require('express');
const azsService = require('../../services/azs.js');

const router = express.Router();

// routes
router.get('/v1/stations/prices', async (req, res, next) => {
  try {
    const data = await azsService.getStationsPrices();
    // print in table format
    console.table(data);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
