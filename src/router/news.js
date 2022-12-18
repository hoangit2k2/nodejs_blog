var express = require('express');
var route = express.Router();

const NewsController = require('../app/controllers/NewsController');

route.use('/:id', NewsController.show);
route.use('/', NewsController.index);

module.exports = route;
