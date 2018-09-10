const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});