require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

module.exports = {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_PORT,
    DB_HOST
};