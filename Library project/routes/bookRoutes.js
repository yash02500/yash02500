const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Get ///');
    res.sendFile('index.html', { root: 'views' });
});

// Book submission
router.post('/submit', bookController.postAddBook);

// Get all books
router.get('/all', bookController.getAllBooks);

// Handle book return
router.put('/return/:bookId', bookController.returnBook);

module.exports = router;
