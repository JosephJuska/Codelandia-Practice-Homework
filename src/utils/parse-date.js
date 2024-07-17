const parseDate = (date) => {
    try{
        let [year, month, day] = date.split('-');
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        const parsedDate = new Date(year, month - 1, day);
        if (parsedDate.getFullYear() !== year || parsedDate.getMonth() + 1 !== month || parsedDate.getDate() !== day) return null;
        return parsedDate;
    }catch(e){
        return null;
    }
}

module.exports = parseDate;