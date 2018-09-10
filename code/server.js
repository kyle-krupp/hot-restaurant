const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let tables = [];
let waitlast = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', () => {
    return res.JSON(tables)
});

app.get('/api/waitlist', (req, res) => {
    return res.JSON(waitlast)
})

app.get()
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});