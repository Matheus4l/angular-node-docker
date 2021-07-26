const express = require('express');
const routes = express.Router();



const userControler = require('./controllers/userController')


// usuarios
routes.get('/users',userControler.index);
routes.post('/users',userControler.store);
    

module.exports = routes;