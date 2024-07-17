class User {
    constructor(row){
        this.id = row.id;
        this.username = row.username;
        this.password = row.password;
    }

    static mapOne(row){
        return new User(row);
    }

    static mapMany(rows){
        data = [];
        rows.forEach(row => {
            data.push(new User(row));
        });
    }

    getSafe(){
        delete this.password;
        return this;
    }
}

module.exports = User;