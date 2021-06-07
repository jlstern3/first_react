//import necessary libraries
const express = require('express');
const app = express();
const faker = require('faker');

//configure server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//USER
const createUser = () =>{
    const newUser={
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};


//COMPANY
const createCompany = () => {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: [{
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }],
    }
    return newCompany;
}


//routes need an http verb, a path, and a function with two parameters (request, response) to run 
//must return something 
app.get("/api/users/new", (request,response)=>{
    const newUserCreated = createUser();
    console.log(newUserCreated);

    response.json({
        message: "We went out and grabbed a new user for you",
        newUser: newUserCreated
    })
})

app.get("/api/companies/new", (request,response) => {
    const newCompanyCreated = createCompany();
    console.log(newCompanyCreated);

    response.json({
        message: "We created a new company for you!",
        newCompany: newCompanyCreated,
    })
})

app.get("/api/user/company", (request, response) => {
    const newUserCreated = createUser();
    const newCompanyCreated = createCompany();
    console.log("We're doubling down on our efforts!");
    response.json({
        message: "Doing all the dirty work today",
        newCompany: newCompanyCreated,
        newUser: newUserCreated,
    })
})


//activate server on a port
app.listen(8000, ()=>{
    console.log("The server is listening on Port 8000");
})