const Sequelize = require('sequelize');
const db = require('../db');

const Color = db.define('color', {
  name: Sequelize.STRING,
  value: Sequelize.ARRAY(Sequelize.INTEGER),
});

module.exports = Color;
