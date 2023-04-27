const router = require('express').Router();
module.exports = router;

router.use('/users', require('./routes/users'));
router.use('/colors', require('./routes/colors'));
// router.use('/palette', require('./routes/palette'));
router.use('/pages', require('./routes/pages'));

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
