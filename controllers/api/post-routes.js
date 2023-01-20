const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// GET all posts

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'title', 'post_date', 'post_content', 'user_id'],
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

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            attributes: ['id', 'title', 'post_date', 'post_content', 'user_id'],
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // res.status(200).json(postData);

        const post = postData.get({ plain: true });
        res.render('post', post);
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
            post_date: req.body.post_date,
            post_content: req.body.post_content,
            user_id: req.body.user_id,
        });
        res.status(200).json(postData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;