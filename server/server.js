const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const {exec} = require('child_process');
const fetch = require("node-fetch");

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.EXPRESS_PORT;
const FLASK_PORT = process.env.FLASK_PORT;
const URI = process.env.DATABASE_URI;

try {
    exec(`python3 findClues.py ${FLASK_PORT}`, {cwd: './python'});
    console.log(`Flask server booting on port: ${FLASK_PORT}`);
} catch (err) {console.log(err);}

try {
    mongoose.connect(URI);
    console.log('DB Connection established');
} catch (err) {console.log(err);}


app.get('/GenCrossword/:keyword', (req, res) => {
    fetch(`http://localhost:${FLASK_PORT}/getKeys/${req.params.keyword}`)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        res.send(json);
    })
    .catch(e => {
        console.log("Unable to reach local flask server. Try running \"pip install -r python/requirements.txt\"")
        console.log(e);
    })
})

app.listen(PORT, () => {
    console.log(`CrosswordGen listening on port ${PORT}`)
})