const usernameProvided = (username) => {
    username = (typeof username === 'string') ? username.trim() : username;
    if(!username) throw new Error('Username not provided');
}

const usernameIsString = (username) => {
    if(typeof username !== 'string') throw new Error('Username must be a string');
}

const usernameStartsWithALetter = (username) => {
    if(/[a-zA-Z]/.test(username) !== true) throw new Error('Username must start with a letter');
}

const usernameLengthIsCorrect = (username) => {
    if(username.length < 5 || username.length > 50) throw new Error('Username must be between 5 and 50 characters');
}

module.exports = {
    usernameProvided,
    usernameIsString,
    usernameLengthIsCorrect,
    usernameStartsWithALetter
}