const router = require('express').Router();
const { Color } = require('../../db');
module.exports = router;

// GET mixer color instances
router.get('/', async (req, res, next) => {
  try {
    const colors = await Color.findAll({ where: { mixer: true } });
    res.json(colors);
  } catch (err) {
    next(err);
  }
});

// POST mixer color instance
router.post('/', async (req, res, next) => {
  try {
    const color = await Color.create({
      value: req.body,
      mixer: true,
    });
    res.json(color);
  } catch (err) {
    next(err);
  }
});

// DELETE mixer color instances
router.delete('/', async (req, res, next) => {
  try {
    const deletedColors = await Color.findAll({ where: { mixer: true } });
    await Promise.all(deletedColors.map(color => color.destroy()));
    res.json(deletedColors);
  } catch (err) {
    next(err);
  }
});
