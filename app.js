const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/users");

app.use(routes);

app.get('/', (req, res)=>{
    res.send('<h1>Hello World!</h1>');
});

app.get("/*", (req, res)=>{
    res.send("Page not found");
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});