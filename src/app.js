const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send('HOME SWEET HOME');
});

module.exports = app;