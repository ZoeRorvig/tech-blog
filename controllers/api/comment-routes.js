const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comment

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            attributes: ['id', 'created_at', 'comment_content', 'user_id', 'post_id'],
            include: [
                {
                    model: Post,
                    attributes: ['title'],
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        res.status(200).json(commentData);

        // const comments = commentData.map((comment) =>
        //     comment.get({ plain: true })
        // );
        // res.render('individual-post', { comments, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one comment

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            attributes: ['id', 'created_at', 'comment_content', 'user_id', 'post_id'],
            include: [
                {
                    model: Post,
                    attributes: ['title'],
                },
                {
                    model: User,
                    attributes: ['username'],
                }],
        });

        res.status(200).json(commentData);

        // const comment = commentData.get({ plain: true });
        // res.render('comment', comment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/new', withAuth, (req, res) => {
//     console.log('hey');
//     res.render('new-comment', {
//         Post,
//         loggedIn: req.session.loggedIn
//     })
// });

// Post new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            created_at: req.body.created_at,
            comment_content: req.body.comment_content,
            user_id: req.session.userId,
            // post_id: req.body.post_id,
            // TODO: fix the post_id
        });
        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;