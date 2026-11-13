const {MongoClient} = require('mongodb');

let dbConnectionURL = 'mongodb://localhost:27017'

const client = new MongoClient(dbConnectionURL);

let dbConnection = async() =>
{
    await client.connect();
    let db = client.db("MongoDB-Student-Project-Database");
    return db;
}

module.exports = {dbConnection};