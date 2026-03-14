// middleware/auth.js
module.exports = (req, res, next) => {
    if (!req.session?.userId) {
        // User not logged in
        return res.redirect('/login');
    }
    next();
};