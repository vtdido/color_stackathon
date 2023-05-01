const router = require('express').Router();
const { Color } = require('../../db');
module.exports = router;

// GET mixed color instances for palette
router.get('/', async (req, res, next) => {
  try {
    const colors = await Color.findAll({ where: { mixer: false } });
    const mixedColors = colors.filter(color => color.id > 8);
    res.json(mixedColors);
  } catch (err) {
    next(err);
  }
});
