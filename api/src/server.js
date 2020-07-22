require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);
const port = 3333;

setupWebsocket(server);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors()); //cors({ origin: 'http://localhost:3000'})
app.use(express.json());
app.use(routes);

console.log(`Listen ${port}`);
server.listen(port);