//const fetch = require("node-fetch");
const data = require("../db.json");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};


exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers
  };
};

// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   console.log("inja");
//     app.use(proxy('/api', {
//         target: 'https://shop-mojtaba.netlify.app/.netlify/functions/mydata',
//         logLevel: 'debug',
//         changeOrigin: true
//     }));
// };





