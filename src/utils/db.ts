const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoError } from 'mongodb';
require('dotenv').config()

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect((err: MongoError) => {
    if(err) {
        return err.code;
    }
});

export const db = client.db("recipe-app-db")