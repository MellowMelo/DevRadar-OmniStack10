const express = require("express");
const mongoose = require("mongoose");
//Baixar o Insomnia : insomnia.rest

const app = express();



mongoose.connect("text",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.get("/", (req, res)=>{
    console.log(req.body);
    return res.json({message : "Hello"});
});

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Application running on "+PORT+" port");
})