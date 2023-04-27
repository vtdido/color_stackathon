const { db } = require('./db');
const PORT = process.env.PORT || 8080;
const app = require('./app');
const seed = require('../script/seed');

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    }
    else {
      await db.sync();
    }
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.err(err.response.data);
  }
};

init();
