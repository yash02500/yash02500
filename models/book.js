const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Book = sequelize.define('Book', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  bookName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  submitTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  returnTime: {
    type: Sequelize.DATE, 
    defaultValue: null, 
  },
  returnFine: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Book;
