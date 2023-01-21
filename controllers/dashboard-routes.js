const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/',  withAuth, async (req, res) => {
    const userID = req.session.userId;
    try {
        const postData = await Post.findAll({
            where: { user_id: userID},
            attributes: ['id', 'title', 'post_content', 'created_at','user_id'],
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                    include:
                    {
                        model: User,
                        attributes: ['username']
                    },
                },
            ],
        });

        // res.status(200).json(postData);

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

router.get('/create', withAuth, (req, res) => {
    res.render('new-post', {
        loggedIn: req.session.loggedIn
    })
})

module.exports = router;