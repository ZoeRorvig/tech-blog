const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'Good Stuff!',  
    comment_date: 'June 21, 2021 17:00:00',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: 'This is a hard project!', 
    comment_date: 'June 21, 2021 17:00:00', 
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
