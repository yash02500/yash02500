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
    type: Sequelize.DATEONLY, // DATEONLY if you only need the date part
    allowNull: false,
  },
  returnTime: {
    type: Sequelize.DATE, // DATE if you need date and time
    defaultValue: null, // Default value is null until the book is returned
  },
  returnFine: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Book;
