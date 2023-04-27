const Sequelize = require('sequelize');
const db = require('../db');

const Page = db.define('page', {
  name: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Page;
