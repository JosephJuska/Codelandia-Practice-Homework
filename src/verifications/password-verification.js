const passwordIsProvided = (password) => {
    password = typeof password === 'string' ? password.trim() : password;
    if(!password) throw new Error('Password not provided');
}

const passwordIsString = (password) => {
    if(typeof password !== 'string') throw new Error('Password must be a string'); 
}

const passwordLengthIsCorrect = (password) => {
    if(password.length < 8) throw new Error('Password must be at least 8 characters long');
}

const passwordContainsLetter = (password) => {
    if(/[a-zA-Z]/.test(password) !== true) throw new Error('Password must contain a letter');
}

const passwordContainsUppercaseLetter = (password) => {
    if(/[A-Z]/.test(password) !== true) throw new Error('Password must contain an uppercase letter');
}

const passwordContainsDigit = (password) => {
    if(/[0-9]/.test(password) !== true) throw new Error('Password must contain a digit');
}

module.exports = {
    passwordIsProvided,
    passwordIsString,
    passwordLengthIsCorrect,
    passwordContainsLetter,
    passwordContainsUppercaseLetter,
    passwordContainsDigit
}