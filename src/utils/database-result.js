class DatabaseResult {
    constructor(success, errorCode, errorMessage, critical, data){
        this.success = success;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.critical = critical;
        this.data = data;
    }
}

class DatabaseError extends DatabaseResult {
    constructor(errorCode, errorMessage, critical){
        super(false, errorCode, errorMessage, critical);
    }
}

class DatabaseSuccess extends DatabaseResult {
    constructor(data){
        super(true, null, null, false, data);
    }
}

module.exports = {
    DatabaseError,
    DatabaseSuccess
};