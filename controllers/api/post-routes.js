const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all posts

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'created_at', 'post_content', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // res.status(200).json(postData);

        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', posts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one post

router.get('/:id',  async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
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

        const post = postData.get({ plain: true });
        res.render('individual-post', { post, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// New post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            created_at: req.body.created_at,
            post_content: req.body.post_content,
            user_id: req.session.userId,
        });
        res.status(200).json(postData)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;