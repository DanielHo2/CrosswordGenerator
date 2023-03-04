const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
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

mongoose.set('debug', true);
mongoose.set('strictQuery', false);


const userSchema = new mongoose.Schema({
    googleID: {
        type: String,
        unique: true
    },
    savedPuzzles: [{
        dim: Number,
        clue_list: [
            {
                word: String,
                clue: String
            }
        ]
    }]
})

const User = new mongoose.model("User", userSchema);

app.post('/api/signin', function (req, res) {
    const {googleID} = req.body;
    if (!googleID) {
        return res.json({
            status: 'fail',
            message: 'no googleID field present in request'
        })
    }
    User.findOne({googleID}, function(err, user){
        if(err){
            return res.json({
                status: 'fail',
                message: err
            })
        }
        if(!user){
            const newUser = new User({
                googleID
            })
            newUser.save(function(err, user){
                if(err){
                    if(err.code === 11000){
                        const key = Object.keys(err.keyValue[0])[0]
                        const message = `Duplicated ${key} value: "${err.keyValue[key]}". Please use another value`
                        return res.json({
                            status: 'fail',
                            message,
                        })
                    }
                    return res.json({
                        status: 'fail',
                        message: err
                    })
                }
                res.json({
                    status: 'success',
                    data: {
                        user
                    }
                })
            })
        } else {
            res.json({
                status: 'success',
                data: {
                    user
                }
            })
        }
    })
})

app.post('/api/savePuzzle', function(req, res) {
    const {googleID, puzzle} = req.body;
    if (!googleID || !puzzle) {
        return res.json({
            status: 'fail',
            message: 'no googleID or puzzle field(s) present in request'
        })
    }
    User.findOne({googleID}, function(err, user){
        if(err){
            return res.json({
                status: 'fail',
                message: err
            })
        }
        if(!user){
            return res.json({
                status: 'fail',
                message: 'Invalid googleID'
            })
        }
        user.updateOne(
            {$push: {savedPuzzles: puzzle}},
            (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })
        res.json({
            status: 'success',
            data: {
                user
            }
        })
    })
})

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