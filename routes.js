const express = require('express');
const route = express.Router();

const homeController = require('./controllers/homeController');
const menuController = require('./controllers/menuController');
const menuPDFController = require('./controllers/menuPDFController');
const error404Controller = require('./controllers/error404Controller');
const loginController = require('./controllers/loginController');

route.get('/', homeController.home);
route.get('/menu', menuController.menu);
route.get('/menuPDF', menuPDFController.menuPDF);
route.get('/error404', error404Controller.error404);
route.get('/login', loginController.login);
route.get('/register', loginController.register);
route.post('/login/register', )

module.exports = route;