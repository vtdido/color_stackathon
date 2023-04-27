const router = require('express').Router();
const { Color } = require('../../db');
module.exports = router;

// GET all color instances
router.get('/', async (req, res, next) => {
  try {
    const colors = await Color.findAll();
    res.send(colors);
  } catch (err) {
    next(err);
  }
});
