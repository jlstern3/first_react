const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require('./config/mongoose.config');

require('./routes/pets.routes')(app);

// app.get('/jess', (req,res) => {
//     console.log("cool API, Jess!");
//     res.json({
//         name: "Jess",
//         job: "Ranger"
//     })
// })

app.listen(8000, () => {
    console.log("Server is actively listening on Port 8000")
});