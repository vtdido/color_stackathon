const { db, Color } = require('../server/db');

async function seed() {
  await db.sync({ force: true });

  // Creating colors
  const colors = await Promise.all([
    // Base colors
    await Color.create({ name: 'red', value: [255, 0, 0] }),
    await Color.create({ name: 'green', value: [0, 255, 0] }),
    await Color.create({ name: 'blue', value: [0, 0, 255] }),
    await Color.create({ name: 'black', value: [0, 0, 0] }),
    await Color.create({ name: 'yellow', value: [255, 255, 0] }),
    await Color.create({ name: 'cyan', value: [0, 255, 255] }),
    await Color.create({ name: 'magenta', value: [255, 0, 255] }),
    await Color.create({ name: 'white', value: [255, 255, 255] }),

    // Example colors
    // await Color.create({ name: 'orange', value: [255, 150, 0] }),
    // await Color.create({ name: 'gold', value: [255, 210, 0] }),
    // await Color.create({ name: 'chartreuse', value: [190, 255, 0] }),
    // await Color.create({ name: 'emerald-green', value: [0, 165, 30] }),
    // await Color.create({ name: 'forest-green', value: [32, 128, 64] }),
    // await Color.create({ name: 'teal', value: [0, 180, 170] }),
    // await Color.create({ name: 'turquoise', value: [0, 255, 180] }),
    // await Color.create({ name: 'pale-blue', value: [180, 235, 255] }),
    // await Color.create({ name: 'sky-blue', value: [0, 170, 255] }),
    // await Color.create({ name: 'navy', value: [0, 0, 128] }),
    // await Color.create({ name: 'indigo', value: [100, 0, 255] }),
    // await Color.create({ name: 'purple', value: [150, 0, 255] }),
    // await Color.create({ name: 'lavender', value: [200, 160, 240] }),
    // await Color.create({ name: 'pink', value: [255, 130, 220] }),
    // await Color.create({ name: 'hot-pink', value: [255, 30, 180] }),
    // await Color.create({ name: 'burgundy', value: [100, 0, 50] }),
    // await Color.create({ name: 'maroon', value: [128, 0, 0] }),
    // await Color.create({ name: 'chocolate', value: [116, 46, 0] }),
    // await Color.create({ name: 'brown', value: [150, 75, 0] }),
    // await Color.create({ name: 'tan', value: [210, 180, 140] }),
    // await Color.create({ name: 'beige', value: [240, 230, 200] }),
    // await Color.create({ name: 'silver', value: [190, 190, 190] }),
    // await Color.create({ name: 'gray', value: [128, 128, 128] }),
    // await Color.create({ name: 'dark-gray', value: [64, 64, 64] }),
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
