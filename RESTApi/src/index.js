const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
//Baixar o Insomnia : insomnia.rest

const app = express();

mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("Application running on "+PORT+" port");
})