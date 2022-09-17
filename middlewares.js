const Request = require("./model");
const fs = require("fs");
let log_path = "log.txt";

const logger = (req, res, next) => {
    let record = JSON.stringify(new Request(req.ip, req.get('User-Agent'), req.url)) + "\n";

    fs.appendFile(log_path, record, (err) => {
        if (err) throw err;
    })
    console.log(`Request: ${record}`);
    next();
}

module.exports = {logger,log_path};