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

const cors=require('cors')
const express=require('express')
const app=express()

app.use(cors({
  // origin: process.env.ORIGIN
  origin: "*",
  methods: ["GET", "POST"]
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})





