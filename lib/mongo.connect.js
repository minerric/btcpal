require('dotenv').load()
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URI

async function connect() {


    return await MongoClient.connect(url, {poolSize: 20, useNewUrlParser: true}).catch(err => {

        console.error('error connecting to server @', url);
        process.exit(1);
    });
}

module.exports = {
    connect,
};
