const ADD_USER = 'INSERT INTO users (username, password) VALUES ($1, $2)';
const GET_USER_BY_USERNAME = 'SELECT * FROM users WHERE username = $1';

const GET_ALL_BOOKS = 'SELECT * FROM books';
const GET_BOOK_BY_ID = 'SELECT * FROM books WHERE id = $1';
const CREATE_BOOK = 'INSERT INTO books (title, author, published_date, isbn) VALUES ($1, $2, $3, $4)';
const DELETE_BOOK_BY_ID = 'DELETE FROM books WHERE id = $1';
const UPDATE_BOOK_BY_ID = 'UPDATE books SET title = $1, author = $2, published_date = $3, isbn = $4 WHERE id = $5';

module.exports = {
    ADD_USER,
    GET_USER_BY_USERNAME,
    GET_ALL_BOOKS,
    GET_BOOK_BY_ID,
    CREATE_BOOK,
    DELETE_BOOK_BY_ID,
    UPDATE_BOOK_BY_ID
}