const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const menuController = require('./controllers/menuController');
const menuPDFController = require('./controllers/menuPDFController');

route.get('/', homeController.home);
route.get('/menu', menuController.menu);
route.get('/menuPDF', menuPDFController.menuPDF);

module.exports = route;