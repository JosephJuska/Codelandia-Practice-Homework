const DATABASE_ERROR_CODES = ['23505'];

const SERVER_ERROR = 'Internal Server Error';

const NOT_PROVIDED = (valueName) => {
    return `${valueName} must be provided`;
}

const USER_ALREADY_EXISTS = 'User already exists';
const USERNAME_NOT_PROVIDED = NOT_PROVIDED('Username');
const PASSWORD_NOT_PROVIDED = NOT_PROVIDED('Password');
const USERNAME_OR_PASSWORD_WRONG = 'Username or password is incorrect';

const TOKEN_NOT_PROVIDED = NOT_PROVIDED('Token');
const TOKEN_INVALID = 'Token is invalid';

const NO_BOOKS = 'No books';
const ID_NOT_PROVIDED = NOT_PROVIDED('ID');
const ID_NOT_INT = 'ID must be a number';
const NO_BOOK_WITH_ID = 'No books with specified ID';
const ISBN_ALREADY_EXISTS = 'Book with specified isbn already exists';

const TITLE_NOT_PROVIDED = NOT_PROVIDED('Title');
const AUTHOR_NOT_PROVIDED = NOT_PROVIDED('Author');
const DATE_NOT_PROVIDED = NOT_PROVIDED('Published Date');
const ISBN_NOT_PROVIDED = NOT_PROVIDED('ISBN');

module.exports = {
    DATABASE_ERROR_CODES,
    errorMessages: {
        SERVER_ERROR,
        USER_ALREADY_EXISTS,
        USERNAME_NOT_PROVIDED,
        PASSWORD_NOT_PROVIDED,
        USERNAME_OR_PASSWORD_WRONG,
        TOKEN_NOT_PROVIDED,
        TOKEN_INVALID,
        NO_BOOKS,
        ID_NOT_PROVIDED,
        ID_NOT_INT,
        NO_BOOK_WITH_ID,
        TITLE_NOT_PROVIDED,
        AUTHOR_NOT_PROVIDED,
        DATE_NOT_PROVIDED,
        ISBN_NOT_PROVIDED,
        ISBN_ALREADY_EXISTS
    }
}