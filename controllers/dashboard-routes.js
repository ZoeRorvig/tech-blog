const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.userId },
            attributes: ['id', 'title', 'post_content', 'post_date'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_content', 'post_id', 'user_id', 'comment_date'],
                    include:
                    {
                        model: User,
                        attributes: ['username']
                    },
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;