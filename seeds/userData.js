const { User } = require('../models');

const userdata = [
  {
    username: 'zuluRomeo',
    password: 'boba123'
  },
  {
    username: 'nellieBean',
    password: 'dotty123'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
