const router = require('express').Router();
const { Page } = require('../../db');
module.exports = router;

// GET all page instances
router.get('/', async (req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(pages);
  } catch (err) {
    next(err);
  }
});
