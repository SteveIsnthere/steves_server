
module.exports = class Request {
    constructor(ip,platform,url) {
        this.timeString = new Date().toLocaleString();
        this.ip = ip
        this.platform = platform;
        this.requestURL = url;
    }
}