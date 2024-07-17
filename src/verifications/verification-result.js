class VerificationResult {
    constructor(success, errorMessage, data) {
        this.success = success;
        this.errorMessage = errorMessage;
        this.data = data;
    }
}

class VerificationError extends VerificationResult {
    constructor(errorMessage){
        super(false, errorMessage);
    }
}

class VerificationSuccess extends VerificationResult {
    constructor(data) {
        super(true, null, data);
    }
}

module.exports = {
    VerificationError,
    VerificationSuccess
}