const mongoose = require('mongoose');
const dbName = "movies-db";

// Connect to the database (mongodb)
mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//On server  success
    .then(() => console.log(`Established a connection to the "${dbName}" database`))
//On server error
    .catch( err => console.log(`Error establishing "${dbName}" connection`, err));

