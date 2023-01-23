const { Post } = require('../models');

const postdata = [
  {
    title: 'Welcome to Tech Blog',
    post_content: 'Welcome to Tech Blog! Here you can post things!',  
    user_id: 1,
  },
  {
    title: 'All About Handlebars',
    post_content: 'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.', 
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
