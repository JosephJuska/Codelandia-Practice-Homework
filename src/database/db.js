const { Pool } = require('pg');
const dbConfig = require('../config/db-config');

const pool = new Pool({
    user: dbConfig.DB_USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB_DATABASE,
    host: dbConfig.DB_HOST,
    port: dbConfig.DB_PORT
});

module.exports = pool;