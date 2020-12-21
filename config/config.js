const appName = 'swan-api-gateway';
const port = 3000;

const mongo = {
    "baseURL": "mongodb://localhost:27017/",
    "dbName": "swan-service",
    "debug": "true",
    "username": "swanUsername",
    "password": "Test@123",
    "poolSize": 10,
    "authSource": "swan-service"
};

const urls = {
	productService: 'http://localhost:3001',
	userService: 'http://localhost:3002'
}

module.exports =
{ appName, port, mongo, urls };
