const jwt = require('jsonwebtoken');

const { authExemptedRoutes, adminAuthRoutes, clientAuthRoutes } = require('../common/constant');

const checkAuthRoute = (url) => authExemptedRoutes.includes(url) ? 'anonymus' : adminAuthRoutes.includes(url) ? 'admin': clientAuthRoutes.includes(url) ? 'client': 'noAccess';
 
const generateToken = (payload, key) => jwt.sign(payload, key);

const decodeToken = (token, key) => jwt.verify(token, key);

//const token = generateToken({email:'kranthi@xyz.com', role: 'client'}, 'secretKey');
//console.log(token);

module.exports = {
    checkAuthRoute,
    generateToken,
    decodeToken,
}