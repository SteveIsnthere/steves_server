const express = require('express')
const router = express.Router()
const {logger} = require('../middlewares.js')
let redirect_uri = "https://www.google.com";

// define the home page route
router.get('/', logger, (req, res) => {
    // res.redirect(redirect_uri)
    res.send("if you're seeing this, my server's dead again. Please email me at privacyalwaysfirst@proton.me")
})

module.exports = router