const titleProvided = (title) => {
    title = typeof title === 'string' ? title.trim() : title;
    if(!title) throw new Error('Title not provided');
}

const titleIsString = (title) => {
    if(typeof title !== 'string') throw new Error('Title must be a string');
}

const titleLengthIsCorrect = (title) => {
    if(title.length > 100) throw new Error('Title must be less than 100 characters');
}

module.exports = {
    titleProvided,
    titleIsString,
    titleLengthIsCorrect
}