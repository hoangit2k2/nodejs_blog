var express = require('express');
var route = express.Router();

const CourseController = require('../app/controllers/CourseController');

// router usually '/' before '/search'
route.get('/create', CourseController.create)
route.post('/store', CourseController.store)
route.get('/:slug', CourseController.index);

module.exports = route;
