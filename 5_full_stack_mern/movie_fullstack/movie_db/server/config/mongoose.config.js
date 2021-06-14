const mongoose = require('mongoose');
const dbName = "movies-db";

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the "${dbName}" database`))
    .catch( err => console.log(`Error establishing "${dbName}" connection`, err));

