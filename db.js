const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
// const Product = require('./Product');
require('dotenv').config();
const uri = process.env.DB_URI
  // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   if (err) console.log(err)
  //   console.log('Connected')
  //     // perform actions on the collection object
  //     //   client.close();
  // });


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected') })
  .catch((err) => {
    console.log(`there is not a problem with ${err.message}`);
    process.exit(-1)
  })

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
module.exports = mongoose;
require("./Product");