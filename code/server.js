const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let tables = [];
let waitlist = [];
console.log('WHERE AM I')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.post('/api/waitlist', function (request, response) {
    let reservations = request.body;
    console.log(reservations);

    tables.push(reservations);
    console.log(tables)
    let booked;
    if (reservations.length <= 5) {
        booked = true;
    } else {
        booked = false
    }

    response.json(booked)
});

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function (request, response) {
    response.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function (request, response) {
    response.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/api/tables', function (request, response) {
    return response.json(tables)
});

app.get('/api/waitlist', function (request, response) {
    return response.json(waitlist)
})

app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`)
});