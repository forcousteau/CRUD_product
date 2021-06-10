const Product = require("./Product");

exports.createNewProduct = (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) res.status(500).send(err);
    res.status(201).json(product)
  })
}

exports.listAllPRoducts = () => {

}