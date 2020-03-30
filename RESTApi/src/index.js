const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require('http');
const { setupWebsocket } = require('./websocket');
//Baixar o Insomnia : insomnia.rest

const app = express();
const server = http.Server(app);

setupWebsocket(server);

require("dotenv-safe").config();

mongoose.connect(process.env.MONGO_SECRET,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3001;
server.listen(PORT,()=>{
    console.log("Application running on "+PORT+" port");
})