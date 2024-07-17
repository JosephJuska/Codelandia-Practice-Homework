const authorProvided = (author) => {
    author = typeof author === 'string' ? author.trim() : author;
    if(!author) throw new Error('Author not provided');
}

const authorIsString = (author) => {
    if(typeof author !== 'string') throw new Error('Author must be a string');
}

const authorLengthIsCorrect = (author) => {
    if(author.length > 100) throw new Error('Author must be less than 100 characters');
}

module.exports = {
    authorProvided,
    authorIsString,
    authorLengthIsCorrect
}