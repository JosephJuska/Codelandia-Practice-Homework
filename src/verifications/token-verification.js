const tokenProvided = (token) => {
    token = (typeof token === 'string') ? token.trim() : token;
    if(!token) throw new Error('Token not provided');
}

const tokenIsString = (token) => {
    if(typeof token !== 'string') throw new Error('Token must be a string');
}

module.exports = {
    tokenProvided,
    tokenIsString
}