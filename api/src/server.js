const express = require('express');
const Sequelize = require('sequelize');
const cors = require('cors'); 
const config = require('../config/config.js').development;
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: config.operatorsAliases
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to database established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
