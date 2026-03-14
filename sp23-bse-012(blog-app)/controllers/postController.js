const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');

// List all posts
exports.getAllPosts = async (req, res) => {
try {
const posts = await Post.find().populate('author', 'username');
res.render('posts/index', { posts, userId: req.session.userId });
} catch (err) {
console.error(err);
res.redirect('/');
}
};

// Show single post
exports.getPost = async (req, res) => {
try {
const post = await Post.findById(req.params.id).populate('author', 'username');
if (!post) return res.redirect('/posts');
res.render('posts/single', { post, userId: req.session.userId });
} catch (err) {
console.error(err);
res.redirect('/posts');
}
};

// Show create post form
exports.getCreatePost = (req, res) => {
res.render('posts/create');
};

// Handle create post
exports.postCreatePost = async (req, res) => {
try {
const { title, content } = req.body;
let imageName = '';

    if (req.files && req.files.image) {
        const image = req.files.image;
        imageName = Date.now() + path.extname(image.name);

        image.mv(path.join(__dirname, '../public/uploads/', imageName));
    }

    const post = new Post({
        title,
        content,
        image: imageName,
        author: req.session.userId
    });

    await post.save();
    res.redirect('/posts');

} catch (err) {
    console.error(err);
    res.redirect('/posts/create');
}


};

// Show edit post form
exports.getEditPost = async (req, res) => {
try {
const post = await Post.findById(req.params.id);

    if (!post) return res.redirect('/posts');
    if (post.author.toString() !== req.session.userId) return res.redirect('/posts');

    res.render('posts/edit', { post });

} catch (err) {
    console.error(err);
    res.redirect('/posts');
}

};

// Handle update post
exports.postEditPost = async (req, res) => {
try {
const { title, content } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) return res.redirect('/posts');
    if (post.author.toString() !== req.session.userId) return res.redirect('/posts');

    if (req.files && req.files.image) {

        if (post.image) {
            fs.unlinkSync(path.join(__dirname, '../public/uploads/', post.image));
        }

        const image = req.files.image;
        const imageName = Date.now() + path.extname(image.name);

        image.mv(path.join(__dirname, '../public/uploads/', imageName));

        post.image = imageName;
    }

    post.title = title;
    post.content = content;

    await post.save();

    res.redirect('/posts/' + post._id);

} catch (err) {
    console.error(err);
    res.redirect('/posts');
}

};

// Delete post
exports.deletePost = async (req, res) => {
try {
const post = await Post.findById(req.params.id);


    if (!post) return res.redirect('/posts');
    if (post.author.toString() !== req.session.userId) return res.redirect('/posts');

    if (post.image) {
        fs.unlinkSync(path.join(__dirname, '../public/uploads/', post.image));
    }

    await Post.findByIdAndDelete(req.params.id);

    res.redirect('/posts');

} catch (err) {
    console.error(err);
    res.redirect('/posts');
}


};
