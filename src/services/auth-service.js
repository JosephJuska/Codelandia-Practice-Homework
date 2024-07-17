const queries = require('../utils/queries');
const orm = require('../database/orm');
const User = require('../models/user');

const createUser = async (username, password) => {
    const result = await orm.makeRequest(queries.ADD_USER, [username, password]);
    return result;
}

const getUserByUsername = async (username) => {
    const result = await orm.makeRequest(queries.GET_USER_BY_USERNAME, [username]);
    result.data = result.data?.rows && result.data?.rows.length > 0 ? User.mapOne(result.data.rows[0]) : null;
    return result;
}

module.exports = {
    createUser,
    getUserByUsername
};