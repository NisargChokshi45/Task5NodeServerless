const slsHttp = require("serverless-http");
const expressApp = require("./expressApp");

module.exports.handler = slsHttp(expressApp);
