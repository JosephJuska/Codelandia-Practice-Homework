const queries = require('../utils/queries');
const orm = require('../database/orm');
const Book = require('../models/book');

const getAllBooks = async () => {
    const result = await orm.makeRequest(queries.GET_ALL_BOOKS);
    result.data = result.data?.rows && result.data.rows.length > 0 ? Book.mapMany(result.data.rows) : null;
    return result;
}

const getBookById = async (id) => {
    const result = await orm.makeRequest(queries.GET_BOOK_BY_ID, [id]);
    result.data = result.data?.rows && result.data.rows.length > 0 ? Book.mapOne(result.data.rows[0]) : null;
    return result;
}

const createBook = async (title, author, publishedDate, isbn) => {
    const result = await orm.makeRequest(queries.CREATE_BOOK, [title, author, publishedDate, isbn]);
    return result;
}

const deleteBookById = async (id) => {
    const result = await orm.makeRequest(queries.DELETE_BOOK_BY_ID, [id]);
    return result;
}

const updateBookById = async (id, title, author, publishedDate, isbn) => {
    const result = await orm.makeRequest(queries.UPDATE_BOOK_BY_ID, [title, author, publishedDate, isbn, id]);
    return result;
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBookById,
    updateBookById
};