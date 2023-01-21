const { Post } = require('../models');

const postdata = [
  {
    title: 'Welcome to Tech Blog',
    post_content: 'Welcome to Tech Blog! Here you can post things!',  
    // post_date: '1/19/2023',
    user_id: 1,
  },
  {
    title: 'Difficult Project',
    post_content: 'Where does everything go??', 
    // post_date: '1/5/2023', 
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
