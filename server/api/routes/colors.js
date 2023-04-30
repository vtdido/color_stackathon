const router = require('express').Router();
const { Color } = require('../../db');
module.exports = router;

// GET all library color instances
router.get('/', async (req, res, next) => {
  try {
    const colors = await Color.findAll({ where: { mixer: false } });
    res.send(colors);
  } catch (err) {
    next(err);
  }
});

// POST new color for library
router.post('/', async (req, res, next) => {
  try {
    if (typeof req.body[0] === 'number') {
      const colors = await Color.create({ value: req.body });
      res.send(colors);
    }
  } catch (err) {
    next(err);
  }
});
