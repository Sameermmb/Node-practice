const {MongoClient} = require('mongodb');

let makeConnnectionURL = 'mongodb://localhost:27017'

const client = new MongoClient(makeConnnectionURL);

let makeConnnection = async () => {
    await client.connect();
    let datab = client.db("Second-Mongodb-Database");

    return datab;

}
module.exports = {makeConnnection}