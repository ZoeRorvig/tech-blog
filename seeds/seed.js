const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');

const init = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

init();
