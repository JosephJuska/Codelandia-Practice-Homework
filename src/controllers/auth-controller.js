const { ResponseError, ResponseSuccess } = require('../utils/response');
const usernameVerifications = require('../verifications/username-verification');
const passwordVerifications = require('../verifications/password-verification');
const tokenVerifications = require('../verifications/token-verification');
const { verify, verifyMany } = require('../verifications/verify');
const authService = require('../services/auth-service');
const { errorMessages } = require('../utils/error-messages');
const { hashPassword, comparePassword } = require('../utils/password-utils');
const { generateAccessToken, generateRefreshToken, getPayloadRefreshToken } = require('../utils/token-utils');

const loginUser = async (req, res) => {
    const username = req.body?.username;
    const password = req.body?.password;

    let usernameVerificationResult;

    usernameVerificationResult = verify(username, usernameVerifications.usernameProvided);
    if(!usernameVerificationResult.success) return res.status(400).json(new ResponseError(usernameVerificationResult.errorMessage));

    usernameVerificationResult = verify(username, usernameVerifications.usernameIsString);
    if(!usernameVerificationResult.success) return res.status(400).json(new ResponseError(usernameVerificationResult.errorMessage));
    
    let passwordVerificationResult;

    passwordVerificationResult = verify(password, passwordVerifications.passwordIsProvided);
    if(!passwordVerificationResult.success) return res.status(400).json(new ResponseError(passwordVerificationResult.errorMessage));

    passwordVerificationResult = verify(password, passwordVerifications.passwordIsString);
    if(!passwordVerificationResult.success) return res.status(400).json(new ResponseError(passwordVerificationResult.errorMessage));

    const getUserByUsernameResult = await authService.getUserByUsername(username);
    if(!getUserByUsernameResult.success) return res.status(getUserByUsernameResult.critical ? 500 : 400).json(new ResponseError(getUserByUsernameResult.errorMessage));

    if(!getUserByUsernameResult.data) return res.status(400).json(new ResponseError(errorMessages.USERNAME_OR_PASSWORD_WRONG));
    
    const user = getUserByUsernameResult.data;

    const comparePasswordResult = await comparePassword(password, user.password);
    if(!comparePasswordResult) return res.status(400).json(new ResponseError(errorMessages.USERNAME_OR_PASSWORD_WRONG));

    const accessToken = generateAccessToken({id: user.id, username: user.username});
    const refreshToken = generateRefreshToken({id: user.id, username: user.username});

    res.status(200).json(new ResponseSuccess({accessToken: accessToken, refreshToken: refreshToken}));
};

const registerUser = async (req, res) => {
    const username = req.body?.username;
    const password = req.body?.password;

    const usernameVerificationResult = verifyMany(username, Object.values(usernameVerifications));
    if(!usernameVerificationResult.success) return res.status(400).json(new ResponseError(usernameVerificationResult.errorMessage));

    const passwordVerificationResult = verifyMany(password, Object.values(passwordVerifications));
    if(!passwordVerificationResult.success) return res.status(400).json(new ResponseError(passwordVerificationResult.errorMessage));

    const hashedPassword = await hashPassword(password);

    const userCreationResult = await authService.createUser(username, hashedPassword);
    if(!userCreationResult.success){
        const errorMessage = userCreationResult.critical ? userCreationResult.errorMessage : errorMessages.USER_ALREADY_EXISTS;
        return res.status(userCreationResult.critical ? 500 : 400).json(new ResponseError(errorMessage));
    }

    return res.status(201).json(new ResponseSuccess());
};

const generateToken = (req, res) => {
    const refreshToken = req.body?.refreshToken;
    
    const tokenVerificationResult = verifyMany(refreshToken, Object.values(tokenVerifications));
    if(!tokenVerificationResult.success) return res.status(400).json(new ResponseError(tokenVerificationResult.errorMessage));

    const payload = getPayloadRefreshToken(refreshToken);
    if(!payload) return res.status(400).json(new ResponseError(errorMessages.TOKEN_INVALID));

    const accessToken = generateAccessToken({id: payload.id, username: payload.username});
    return res.status(201).json(new ResponseSuccess({accessToken: accessToken}));
}

module.exports = {
    loginUser,
    registerUser,
    generateToken
}