const bcrypt = require('bcrypt');
const { SALT } = require('../config/auth-config');

const hashPassword = async (password) => {
    const hashed = await bcrypt.hash(password, SALT);
    return hashed;
}

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}