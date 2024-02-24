const Sequelize= require('sequelize');

const sequelize= new Sequelize('node-complete', 'root', '72sqlyash', {
    dialect: 'mysql',
    host: 'localhost'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports= sequelize;