
const data={email:"admin@admin.com",password:"123"}
exports.handler = async function (event, context) {
    return{
      
      statusCode:200,
      body:JSON.stringify(data)
    }
  };
  