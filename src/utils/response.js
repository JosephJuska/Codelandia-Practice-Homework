class Response {
    constructor(success, errorMessage, data){
        this.success = success;
        this.errorMessage = errorMessage;
        this.data = data;
    }
}

class ResponseError extends Response {
    constructor(errorMessage){
        super(false, errorMessage);
    }
}

class ResponseSuccess extends Response {
    constructor(data){
        super(true, null, data);
    }
}

module.exports = {
    ResponseError,
    ResponseSuccess
}