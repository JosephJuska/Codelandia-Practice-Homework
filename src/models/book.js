class Book {
    constructor(row) {
        this.id = row.id;
        this.title = row.title;
        this.author = row.author;
        this.publishedDate = row.published_date;
        this.isbn = row.isbn;
    }

    static mapOne(row){
        return new Book(row);
    }

    static mapMany(rows){
        const data = [];
        rows.forEach(row => data.push(new Book(row)));

        return data;
    }
}

module.exports = Book;