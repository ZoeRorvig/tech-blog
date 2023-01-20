const { User } = require('../models');

const userdata = [
  {
    username: 'zuluRomeo',
    password: 'bobaboy'
  },
  {
    username: 'nellieBean',
    password: 'pipndots'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
