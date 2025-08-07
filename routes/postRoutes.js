const express = require('express');
const router = express.Router();
const { criarPostagem, mostrarFeed } = require('../controllers/postController');
const upload = require('../controllers/multerController');

// Middleware to check authentication
const requireAuth = (req, res, next) => {
    if (req.session.isAuthenticated) {
        next();
    } else {
        console.log('Access denied: User not authenticated');
        res.redirect('/login');
    }
};

// Debug middleware
router.use((req, res, next) => {
    console.log(`Post Route: ${req.method} ${req.path}`);
    console.log('Session:', {
        isAuthenticated: req.session.isAuthenticated,
        userId: req.session.userId
    });
    next();
});

// Protected routes
router.get('/feed', requireAuth, mostrarFeed);
router.post('/feed', requireAuth, upload.single('imagem'), criarPostagem);

module.exports = router;