const express = require('express');
const bookController = require("../controllers/bookController");
const router = express.Router();


// Retrieve all books
router.get('/', bookController.getAllBooks);

// Retrieve a specific book by ID
router.get('/:id', bookController.getBookById);

// Create a new book
router.post('/', bookController.createBook);

// Update a book by ID
router.put('/:id', bookController.updateBookById);

// Delete a book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;
