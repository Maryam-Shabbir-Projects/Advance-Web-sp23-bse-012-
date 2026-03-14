// middleware/imageValidator.js
module.exports = (req, res, next) => {
    if (!req.files || !req.files.image) return next(); // No file uploaded, continue

    const image = req.files.image;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];

    if (!allowedTypes.includes(image.mimetype)) {
        return res.status(400).send('Only images (jpeg, png, gif) are allowed.');
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (image.size > maxSize) {
        return res.status(400).send('Image size should not exceed 2MB.');
    }

    next(); // Image is valid
};