const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>');
});

app.route("/users")
    .get("/", (req, res)=>{
        res.send("All users");
    })
    .post("/", (req, res)=>{
        res.send("User created");
    });


app.get("/*", (req, res)=>{
    res.send("Page not found");
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});