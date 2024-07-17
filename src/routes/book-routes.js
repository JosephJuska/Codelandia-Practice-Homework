const { Router } = require('express');

const booksController = require('../controllers/books-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = Router();

router.use(authMiddleware);

router.get('/', booksController.getAllBooks);
router.post('/', booksController.createBook);
router.get('/:id', booksController.getBookById);
router.put('/:id', booksController.updateBookById);
router.delete('/:id', booksController.deleteBookById);

module.exports = router;