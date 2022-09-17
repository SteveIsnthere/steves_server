const express = require("express");
const fs = require("fs");
const resume_link = require("./routes/resume_link.js");
const entry = require("./routes/entry.js");
const app = express();

const port = 3000;

app.use('/', entry);
app.use('/resume_link', resume_link)

app.listen(port, () => {
    console.log("Server running on port " + port);
});