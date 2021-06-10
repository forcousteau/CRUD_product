require('dotenv').config();
require('./db.js');
const productController = require('./ProductController.js')
const express = require('express');
const worker = require('./worker.js');
const app = express();

const port = process.env.PORT;

app.use(express.static(__dirname));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.post('/', (req, res) =>
  productController.createNewProduct(req, res)
  //res.send(worker.groupASIN(req.body));
)
app.get('/favicon.ico', (req, res) => res.status(204));
app.get('/:asin', (req, res) => {
  res.json(worker.ASINInGroup[req.params.asin])
})

app.put('/asin', (req, res) => {
  worker.updateASIN(req.body);
  res.send(worker.ASINInGroup)
})

app.delete('/asin/:asin', (req, res) => {
  console.log(req.params.asin)
  worker.deleteASIN(req.params.asin);
  res.send('deleted')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})