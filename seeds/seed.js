const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  process.exit(0);
};

init();
