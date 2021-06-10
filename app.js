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


app.get('/favicon.ico', (req, res) => res.status(204));

app
  .route('/')
  .get((req, res) => productController.listAllPRoducts(req, res))
  .post((req, res) => productController.createAnArrayOfProduct(req, res))
  .put((req, res) => productController.createNewProduct(req, res))

app
  .route('/:asin')
  .get((req, res) => productController.listSpecificProducts(req, res))
  .put((req, res) => productController.updateProduct(req, res))
  .delete((req, res) => productController.deleteProduct(req, res))

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})