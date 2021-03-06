const express = require('express');
const res = require('express/lib/response');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);