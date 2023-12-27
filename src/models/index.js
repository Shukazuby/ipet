const Sequelize = require('sequelize');
const { sequelize } = require('../config/config');
const logger = require('../config/logger');

const sequelizeInstance = new Sequelize(sequelize.url);
const db = {};

/*
const sequelizeInstance = new Sequelize(sequelize.database, sequelize.user, sequelize.password, {
  host: sequelize.host,
  dialect: sequelize.dialect,
  pool: {
    min: 0,
    max: 100,
    acquire: 5000,
    Idle: 1000
  },
});
*/
sequelizeInstance
  .authenticate()
  .then(() => logger.info('DB connected'))
  .catch((err) => {
    logger.error(err);
  });

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.users = require('./user.model')(sequelizeInstance, Sequelize);
db.tokens = require('./token.model')(sequelizeInstance, Sequelize);
db.pet = require('./pet.model')(sequelizeInstance, Sequelize);
db.adoption = require('./adoption.model')(sequelizeInstance, Sequelize);
db.donation = require('./donation.model')(sequelizeInstance, Sequelize);
db.category  = require('./category.model')(sequelizeInstance, Sequelize);

// relationships for models

//= ==============================
// Define all relationships here below
db.users.hasMany(db.donation)
db.donation.belongsTo(db.users);

db.users.hasMany(db.adoption)
db.adoption.belongsTo(db.users);

db.pet.hasMany(db.donation)
db.donation.belongsTo(db.pet);

db.category.hasMany(db.pet)
db.pet.belongsTo(db.category);

db.pet.hasOne(db.adoption)
db.adoption.belongsTo(db.pet)
//= ==============================
// db.User.hasMany(db.Role);
// db.Role.belongsTo(db.User);

module.exports = {
  db,
};
