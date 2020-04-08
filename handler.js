'use strict';
const mysql = require('mysql2');

const connectionToDatabase = require('./db');

function HTTPError (statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

module.exports.hello = async event => {

    try{
        const { Test } = await connectionToDatabase();
        const test = await Test.findAll();
        if(!test) throw new HTTPError(404, `data is not found`);
        return{
            statusCode: 200,
            body: JSON.stringify(test)
        }
    }catch(err){
        return {
          statusCode: 500,
          body: JSON.stringify(err)
        }
    }
};
