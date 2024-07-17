const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth-config');

const generateAccessToken = (payload, expiresIn = null) => {
    expiresIn = expiresIn ? expiresIn : '5m';
    const options = { expiresIn: expiresIn };
    const token = jwt.sign(payload, authConfig.ACCESS_SECRET, options);
    return token;
}

const generateRefreshToken = (payload, expiresIn = null) => {
    expiresIn = expiresIn ? expiresIn : '3d';
    const options = { expiresIn: expiresIn };
    const token = jwt.sign(payload, authConfig.REFRESH_SECRET, options);
    return token;
}

const getPayloadAccessToken = (token) => {
    try{
        const payload = jwt.verify(token, authConfig.ACCESS_SECRET);
        return payload;
    }catch(e){
        return null;
    }
}

const getPayloadRefreshToken = (token) => {
    try{
        const payload = jwt.verify(token, authConfig.REFRESH_SECRET);
        return payload;
    }catch(e){
        return null;
    }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    getPayloadAccessToken,
    getPayloadRefreshToken
}