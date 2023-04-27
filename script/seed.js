const { db, User, Color } = require('../server/db');

async function seed() {
  await db.sync({ force: true });

  // Creating users
  const users = await Promise.all([
    await User.create({ username: 'danny', password: '123', email: 'danny@gmail.com' }),
    await User.create({ username: 'fitzy', password: '123', email: 'fitzy@yahoo.com' }),
  ]);
  console.log(`Seeded ${users.length} users`);

  // Creating colors
  const colors = await Promise.all([
    await Color.create({ name: 'red', value: [255, 0, 0] }),
    await Color.create({ name: 'orange', value: [255, 150, 0] }),
    await Color.create({ name: 'yellow', value: [255, 255, 0] }),
    await Color.create({ name: 'lime-green', value: [0, 255, 0] }),
    await Color.create({ name: 'green', value: [0, 165, 30] }),
    await Color.create({ name: 'teal', value: [0, 180, 170] }),
    await Color.create({ name: 'cyan', value: [0, 255, 255] }),
    await Color.create({ name: 'sky-blue', value: [0, 150, 255] }),
    await Color.create({ name: 'blue', value: [0, 0, 255] }),
    await Color.create({ name: 'purple', value: [150, 0, 255] }),
    await Color.create({ name: 'magenta', value: [255, 0, 255] }),
    await Color.create({ name: 'pink', value: [255, 110, 210] }),
    await Color.create({ name: 'brown', value: [150, 75, 0] }),
    await Color.create({ name: 'black', value: [0, 0, 0] }),
    await Color.create({ name: 'white', value: [255, 255, 255] }),
  ]);
  console.log(`Seeded ${colors.length} colors`);

  // Todo: create pages

  console.log(`
    Seeded successfully
    db synced!
  `);
};

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('Seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('Closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
