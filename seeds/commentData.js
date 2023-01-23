const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'So cool',  
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: 'I would love to hear more on this!', 
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: 'Very nice!', 
    user_id: 2,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
