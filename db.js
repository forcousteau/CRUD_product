const mongoose = require('mongoose');
const Product = require('./Product');
require('dotenv').config();
const uri = process.env.DB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  console.log('Connected')
    // perform actions on the collection object
    //   client.close();
});

require("./Product");