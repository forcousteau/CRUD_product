const Product = require("./Product");

exports.createNewProduct = (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) res.status(500).send(err);
    res.status(201).json(product)
  })
}

exports.createAnArrayOfProduct = (req, res) => {
  Product.insertMany(req.body, (err, products) => {
    if (err) res.status(500).send(err)
    res.status(201).json(products)
  })
}

exports.listAllPRoducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) res.status(503).send(err)
    res.status(200).json(products)
  })
}

exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ 'ASIN': req.params.asin }, req.body, { new: true }, (err, product) => {
    if (err) res.status(500).send(err)
    res.status(200).json(product)
  })
}

exports.deleteProduct = (req, res) => {
  Product.findOneAndDelete({ 'ASIN': req.params.asin }, (err, product) => {
    if (err) res.status(404).send(err)
    res.status(200).json(product)
  })
}

exports.listSpecificProducts = (req, res) => {
  Product.find({ ASIN: req.params.asin }, (err, products) => {
    if (err) res.status(500).send(err)
    res.status(200).json(products)
  })
}