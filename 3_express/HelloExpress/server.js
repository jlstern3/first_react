const express = require("express");
const app = express();

//confingure server here (Express middleware functions)
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//create routes and functions here 
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
    res.json( users );
});

app.get("/api", (request, response) => {
  response.send("Let's see nodemon in action!");
});

app.post("/api/users", (request, response) => {
  console.log(request.body);
  users.push(request.body);
  //ALWAYS NEED TO RESPOND WITH SOMETHING
  response.json({status: "ok"});
})

//tell server to listen on port 8000
const server = app.listen(8000, () =>
  console.log("The server is listening on port 8000")
);


