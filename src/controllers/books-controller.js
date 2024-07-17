const booksService = require('../services/book-service');
const { errorMessages } = require('../utils/error-messages');
const { ResponseError, ResponseSuccess } = require('../utils/response');
const titleVerifications = require('../verifications/title-verification');
const authorVerifications = require('../verifications/author-verification');
const publishDateVerifications = require('../verifications/publish-date-verification');
const isbnVerifications = require('../verifications/isbn-verification');
const { verify, verifyMany } = require('../verifications/verify');

const getAllBooks = async (req, res) => {
    const getBooksResult = await booksService.getAllBooks();
    if(!getBooksResult.success) return res.status(getBooksResult.critical ? 500 : 400).json(new ResponseError(getBooksResult.errorMessage));

    if(!getBooksResult.data) return res.status(404).json(new ResponseError(errorMessages.NO_BOOKS));

    return res.status(200).json(new ResponseSuccess(getBooksResult.data));
};

const getBookById = async (req, res) => {
    const id = req.params?.id;
    if(!id) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_PROVIDED));

    const changedId = Number.parseInt(id)
    if(!Number.isInteger(changedId)) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_INT));

    const getBookResult = await booksService.getBookById(changedId);
    if(!getBookResult.success) return res.status(getBookResult.critical ? 500 : 400).json(new ResponseError(getBookResult.errorMessage));

    if(!getBookResult.data) return res.status(404).json(new ResponseError(errorMessages.NO_BOOK_WITH_ID));

    return res.status(200).json(new ResponseSuccess(getBookResult.data));
};

const createBook = async (req, res) => {
    const title = req.body?.title;
    const author = req.body?.author;
    const publishedDate = req.body?.publishedDate;
    const isbn = req.body?.isbn;

    const titleVerificationResult = verifyMany(title, Object.values(titleVerifications));
    if(!titleVerificationResult.success) return res.status(400).json(new ResponseError(titleVerificationResult.errorMessage));

    const authorVerificationResult = verifyMany(author, Object.values(authorVerifications));
    if(!authorVerificationResult.success) return res.status(400).json(new ResponseError(authorVerificationResult.errorMessage));

    const publishedDateVerificationResult = verifyMany(publishedDate, Object.values(publishDateVerifications));
    if(!publishedDateVerificationResult.success) return res.status(400).json(new ResponseError(publishedDateVerificationResult.errorMessage));

    const isbnVerificationResult = verifyMany(isbn, Object.values(isbnVerifications));
    if(!isbnVerificationResult.success) return res.status(400).json(new ResponseError(isbnVerificationResult.errorMessage));

    const createBookResult = await booksService.createBook(title, author, publishedDate, isbn);
    if(!createBookResult.success){
        const errorMessage = createBookResult.critical ? updateBookByIdResult.errorMessage : errorMessages.ISBN_ALREADY_EXISTS;
        return res.status(createBookResult.critical ? 500 : 400).json(new ResponseError(errorMessage));
    }

    return res.status(201).json(new ResponseSuccess());
};

const updateBookById = async (req, res) => {
    const id = req.params?.id;
    if(!id) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_PROVIDED));

    const changedId = Number.parseInt(id)
    if(!Number.isInteger(changedId)) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_INT));

    const getBookByIdResult = await booksService.getBookById(changedId);
    if(!getBookByIdResult.success) return res.status(getBookByIdResult.critical ? 500 : 400).json(new ResponseError(getBookByIdResult.errorMessage));
    if(!getBookByIdResult.data) return res.status(404).json(new ResponseError(errorMessages.NO_BOOK_WITH_ID));

    const bookId = getBookByIdResult.data.id;
    const title = req.body?.title;
    const author = req.body?.author;
    const publishedDate = req.body?.publishedDate;
    const isbn = req.body?.isbn;

    const titleVerificationResult = verifyMany(title, Object.values(titleVerifications));
    if(!titleVerificationResult.success) return res.status(400).json(new ResponseError(titleVerificationResult.errorMessage));

    const authorVerificationResult = verifyMany(author, Object.values(authorVerifications));
    if(!authorVerificationResult.success) return res.status(400).json(new ResponseError(authorVerificationResult.errorMessage));

    const publishedDateVerificationResult = verifyMany(publishedDate, Object.values(publishDateVerifications));
    if(!publishedDateVerificationResult.success) return res.status(400).json(new ResponseError(publishedDateVerificationResult.errorMessage));

    const isbnVerificationResult = verifyMany(isbn, Object.values(isbnVerifications));
    if(!isbnVerificationResult.success) return res.status(400).json(new ResponseError(isbnVerificationResult.errorMessage));

    const updateBookByIdResult = await booksService.updateBookById(bookId, title, author, publishedDate, isbn);
    if(!updateBookByIdResult.success){
        const errorMessage = updateBookByIdResult.critical ? updateBookByIdResult.errorMessage : errorMessages.ISBN_ALREADY_EXISTS;
        return res.status(updateBookByIdResult.critical ? 500 : 400).json(new ResponseError(errorMessage));
    }

    return res.status(200).json(new ResponseSuccess());
};

const deleteBookById = async (req, res) => {
    const id = req.params?.id;
    if(!id) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_PROVIDED));

    const changedId = Number.parseInt(id)
    if(!Number.isInteger(changedId)) return res.status(400).json(new ResponseError(errorMessages.ID_NOT_INT));

    const getBookByIdResult = await booksService.getBookById(changedId);
    if(!getBookByIdResult.success) return res.status(getBookByIdResult.critical ? 500 : 400).json(new ResponseError(getBookByIdResult.errorMessage));
    if(!getBookByIdResult.data) return res.status(404).json(new ResponseError(errorMessages.NO_BOOK_WITH_ID));

    const deleteBookByIdResult = await booksService.deleteBookById(id);
    if(!deleteBookByIdResult.success) return res.status(deleteBookByIdResult.critical ? 500 : 400).json(new ResponseError(deleteBookByIdResult.errorMessage));

    return res.status(204).json(new ResponseSuccess());
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById
}