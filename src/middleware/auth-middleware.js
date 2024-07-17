const { errorMessages } = require('../utils/error-messages');
const { ResponseError } = require('../utils/response');
const { getPayloadAccessToken } = require('../utils/token-utils');

const authMiddleware = (req, res, next) => {
    const accessToken = req.headers?.authorization;
    if(!accessToken) return res.status(403).json(new ResponseError(errorMessages.TOKEN_NOT_PROVIDED));

    if(accessToken.length < 8) return res.status(403).json(new ResponseError(errorMessages.TOKEN_INVALID));

    const token = accessToken.slice(7);
    
    const payload = getPayloadAccessToken(token);
    if(!payload) return res.status(401).json(new ResponseError(errorMessages.TOKEN_INVALID));

    next();
}

module.exports = authMiddleware;