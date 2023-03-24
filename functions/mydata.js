//const fetch = require("node-fetch");
const data = require("../db.json");

const headers={
  "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "GET, POST, OPTION",
           "Content-Type": "application/json"
}


exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers:headers
  };
};

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'https://shop-mojtaba.netlify.app/.netlify/functions/mydata',
        logLevel: 'debug',
        changeOrigin: true
    }));
};





