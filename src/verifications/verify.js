const { VerificationSuccess, VerificationError } = require('./verification-result');

const verify = (value, callback) => {
    try{
        const data = callback(value);
        return new VerificationSuccess(data);
    }catch(e){
        return new VerificationError(e.message);
    }
}

const verifyMany = (value, callbacks) => {
    for(let i = 0; i < callbacks.length; i++) {
        try{
            callbacks[i](value);
        }catch(e){
            return new VerificationError(e.message);
        }
    }

    return new VerificationSuccess();
}

module.exports = {
    verify,
    verifyMany
};