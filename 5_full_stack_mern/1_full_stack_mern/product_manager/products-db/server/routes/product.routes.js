const ProductController = require('../controllers/product.controller');

module.export = function(app){
    //create product
    app.post('/api/product', ProductController.createProduct);

}