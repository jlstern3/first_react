const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config');

require('./routes/product.routes')(app);

app.listen(8000, console.log("Server is listening on Port 8000"));