const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/login',
      createProxyMiddleware({
        target: 'https://shop-mojtaba.netlify.app/.netlify/functions/mydata',
        changeOrigin: true,
      })
   );};