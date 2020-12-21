const axios = require('axios');

const { errorMessage, errorStatusCode, secretKey, unauthorisedStatusCode, unauthorisedMessage } = require('../common/constant');
const { checkAuthRoute, decodeToken } = require('../helpers/authHelper');

const { urls } = require('../../config/config');

const createProduct = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const decodedToken = decodeToken(authorization, secretKey);
      if (decodedToken.role === checkAuthRoute(req.path)) {
        const reqBody = JSON.parse(Buffer.from(req.files.file.data));
        try{
          await axios({
          method: "POST",
          url: urls.productService + req.originalUrl,
          data: reqBody,
        }).then(async function(response){
          res.send(response.data);  
        });
      } catch(error) {
          res.statusCode = errorStatusCode;
          res.send(errorMessage); 
        }; 
      }
  } catch (e) {
    res.statusCode = unauthorisedStatusCode;
    res.json(unauthorisedMessage);
  }
};

const reviewProduct = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const decodedToken = decodeToken(authorization, secretKey);
    try {
      if (decodedToken.role === checkAuthRoute(req.path)) {
        try{
          await axios({
          method: "POST",
          url: urls.productService + req.originalUrl,
          data: req.body,
        }).then(async function(response){
          res.send(response.data);  
        });
      } catch(error) {
          res.statusCode = errorStatusCode;
          res.send(errorMessage); 
        }; 
      }
    } catch (e) {
      res.statusCode = errorStatusCode;
      res.json(errorMessage);
    }
  } catch (e) {
    res.statusCode = unauthorisedStatusCode;
    res.json(unauthorisedMessage);
  }
};

const searchProduct = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const decodedToken = decodeToken(authorization, secretKey);
      if (decodedToken.role === checkAuthRoute(req.path)) {
        try{
          await axios({
          method: "POST",
          url: urls.productService + req.originalUrl,
          data: req.body,
        }).then(async function(response){
          res.send(response.data);  
        });
      } catch(error) {
          res.statusCode = errorStatusCode;
          res.send(errorMessage); 
        }; 
      }
  } catch (e) {
    res.statusCode = unauthorisedStatusCode;
    res.json(unauthorisedMessage);
  }
};

module.exports = {
  createProduct,
  reviewProduct,
  searchProduct,
};
