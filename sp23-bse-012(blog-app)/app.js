// app.js
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const session = require('express-session');

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const logger = require('./middleware/logger');

const Post = require('./models/Post');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(logger);

app.use(session({
    secret: 'blogSecret123',
    resave: false,
    saveUninitialized: false
}));

// Make userId available in all views
app.use((req, res, next) => {
    res.locals.userId = req.session?.userId || null;
    next();
});

// Home route
app.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).limit(3).populate('author', 'username');
        res.render('home', { userId: req.session.userId, posts });
    } catch (err) {
        console.error(err);
        res.render('home', { userId: req.session.userId, posts: [] });
    }
});
// Auth routes
app.use('/', authRoutes);

// Post routes
app.use('/posts', postRoutes);

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));