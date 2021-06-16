const Product = require('../models/product.models');

module.exports.createProduct = (req,res) => {
    console.log("Inside createProduct");
    console.log(req.body);
    Product.insert(req.body)
        .then((newProduct) =>{
            console.log(newMovie);
            res.json(newMovie);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
}