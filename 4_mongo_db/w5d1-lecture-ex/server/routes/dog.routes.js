//imports all functions we exported from our controllers file
const dogController = require('../controllers/dog.controller');

module.exports = app => {
    app.get('/', dogController.baseRoute);
    app.get('/dogs', dogController.getAllDogs);
    app.post('/dogs/create', dogController.createDog);
    app.get('/dogs/:dogID', dogController.getSingleDog);
}

