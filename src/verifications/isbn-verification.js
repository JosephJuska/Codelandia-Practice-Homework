const isbnProvided = (isbn) => {
    isbn = typeof isbn === 'string' ? isbn.trim() : isbn;
    if(!isbn) throw new Error('ISBN not provided');
}

const isbnIsString = (isbn) => {
    if(typeof isbn !== 'string') throw new Error('ISBN must be a string');
}

const isbnInCorrectLength = (isbn) => {
    if(isbn.length !== 20) throw new Error('ISBN must be 20 characters');
}

const isbnConsistsOfLettersAndNumbers = (isbn) => {
    if(/^[a-zA-Z0-9]{20}$/.test(isbn) !== true) throw new Error('ISBN must only contain letters and numbers');
}

module.exports = {
    isbnProvided,
    isbnIsString,
    isbnInCorrectLength,
    isbnConsistsOfLettersAndNumbers
}