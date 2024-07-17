const pool = require('../database/db');
const { DatabaseError, DatabaseSuccess } = require('../utils/database-result');
const { DATABASE_ERROR_CODES, errorMessages } = require('../utils/error-messages');

class ORM {
    constructor(pool){
        this.pool = pool;
    }

    async makeRequest(query, values = []){
        try{
            const result = await this.pool.query(query, values);
            return new DatabaseSuccess(result);
        }catch(e){
            if(e?.code && DATABASE_ERROR_CODES.includes(e.code)){
                return new DatabaseError(e.code, e.message, false);
            }

            return new DatabaseError(null, errorMessages.SERVER_ERROR, true);
        }
    }
}

const orm = new ORM(pool);
module.exports = orm;