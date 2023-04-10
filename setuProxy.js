const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");
const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://shop-mojtaba.netlify.app/.netlify/functions",
    changeOrigin: true,
  })
);
app.listen(3000);
