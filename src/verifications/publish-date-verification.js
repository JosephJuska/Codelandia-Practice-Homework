const parseDate = require("../utils/parse-date");

const publishDateProvided = (publishDate) => {
    publishDate = typeof publishDate === 'string' ? publishDate.trim() : publishDate;
    if(!publishDate) throw new Error('Published Date not provided');
}

const publishDateIsString = (publishDate) => {
    if(typeof publishDate !== 'string') throw new Error('Published Date must be a string');
}

const publishDateInCorrectFormat = (publishDate) => {
    if(/^\d{4}-\d{2}-\d{2}$/.test(publishDate) !== true) throw new Error('Published Date must be in the format YYYY-MM-DD');
    const parsedDate = parseDate(publishDate);
    if(!parsedDate) throw new Error('Published Date must be a valid date');
}

module.exports = {
    publishDateProvided,
    publishDateIsString,
    publishDateInCorrectFormat
}