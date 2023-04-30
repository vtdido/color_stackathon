const Sequelize = require('sequelize');
const db = require('../db');

const Color = db.define('color', {
  name: Sequelize.STRING,
  value: Sequelize.ARRAY(Sequelize.INTEGER),
  mixer: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Color;
