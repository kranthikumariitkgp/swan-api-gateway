
const axios = require('axios');
const { passwordEncode } = require('../helpers/password');
const { errorMessage, errorStatusCode } = require('../common/constant');

const { urls } = require('../../config/config');
const { checkAuthRoute } = require('../helpers/authHelper');

const createUser = async (req, res) => {
  try {
    const reqBody = req.body;
    if (reqBody.password) {
      reqBody.password = await passwordEncode(reqBody.password);
    }
    if(checkAuthRoute(req.originalUrl) === 'anonymus') {
      try{
        await axios({
        method: "POST",
        url: urls.userService + req.originalUrl,
        data: reqBody,
      }).then(async function(response){
        res.send(response.data);  
      });
    } catch(error) {
        res.statusCode = errorStatusCode;
        res.send(errorMessage); 
      }; 
  }}catch (e) {
    res.statusCode = errorStatusCode;
    res.send(errorMessage);
  }
};

module.exports = {
  createUser,
};
