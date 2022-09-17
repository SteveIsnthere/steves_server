const express = require('express')
const readline = require('readline');
const fs = require('fs');
const router = express.Router()
const {logger, log_path} = require('../middlewares.js')


// define the home page route
router.get('/', logger, (req, res) => {
    let response = "";

    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(log_path),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
        res.send(response + `Welcome to my server visitor number ${linesCount + 1}! Email me at privacyalwaysfirst@proton.me if you have any questions.`);
    });
})

module.exports = router