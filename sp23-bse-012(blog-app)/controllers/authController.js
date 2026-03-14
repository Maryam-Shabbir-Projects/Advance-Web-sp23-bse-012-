const bcrypt = require('bcrypt');
const User = require('../models/User');

// show register page
exports.getRegister = (req, res) => {
    res.render('register');
};

// register user
exports.postRegister = async (req, res) => {

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    req.session.userId = user._id;

    res.redirect('/posts');
};

// show login page
exports.getLogin = (req, res) => {
    res.render('login');
};

// login user
exports.postLogin = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.redirect('/login');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.redirect('/login');
    }

    req.session.userId = user._id;

    res.redirect('/posts');
};

// logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};