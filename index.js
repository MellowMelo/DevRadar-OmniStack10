const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    return res.send("Hello World");
});

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Application running on "+PORT+" port");
})