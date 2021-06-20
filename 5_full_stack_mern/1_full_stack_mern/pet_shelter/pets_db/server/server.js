const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// require('./config/mongoose.config');

// require('./routes/pets.routes') (app);

// app.post('/jess', (req,res) => {
//     console.log("cool API, Jess!");
//     response.json({
//         name: "Jess",
//         job: "Forager"
//     })
// })

app.listen(8000, () => {
    console.log("Server is actively listening on Port 8000")
});