const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'Good Stuff!',  
    // comment_date: '1/20/2023',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: 'How does one login?', 
    // comment_date: '1/20/2023', 
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: 'Maybe it works?', 
    // comment_date: '1/20/2023', 
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
