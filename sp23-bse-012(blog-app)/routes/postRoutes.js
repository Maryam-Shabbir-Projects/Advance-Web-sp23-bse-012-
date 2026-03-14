const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const postController = require('../controllers/postController');

const isAuth = require('../middleware/auth');
const validateImage = require('../middleware/imageValidator');

router.use(fileUpload());

const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {

    const posts = await Post.find().populate('author');

    res.render('posts/index', { posts });

};
// CRUD Routes
router.get('/', postController.getAllPosts);                    // Read all posts
router.get('/create', isAuth, postController.getCreatePost);    // Create form
router.post('/create', isAuth, validateImage, postController.postCreatePost); // Create submit
router.get('/:id', postController.getPost);                     // Read single post
router.get('/edit/:id', isAuth, postController.getEditPost);    // Edit form
router.post('/edit/:id', isAuth, validateImage, postController.postEditPost); // Edit submit
router.get('/delete/:id', isAuth, postController.deletePost);   // Delete post

module.exports = router;