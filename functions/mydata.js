
const data=require('../db.json')
const headers={
  'content-type':'application/json',
  'Access-Control-Allow-Orogin':'*'
}
exports.handler = async function (event, context) {
    return{
      
      statusCode:200,
      body:JSON.stringify(data),
      headers:headers
    }
  };
  