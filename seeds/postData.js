const { Post } = require('../models');

const postdata = [
  {
    title: 'Welcome to Tech Blog',
    post_content: 'Welcome to Tech Blog! Here you can post things!',  
    post_date: 'June 21, 2021 17:00:00',
    user_id: 1,
  },
  {
    title: 'Difficult Project',
    post_content: 'This has been a difficult project... figuring out where everything', 
    post_date: 'June 21, 2021 17:00:00', 
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
