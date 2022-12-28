var express = require('express');
var route = express.Router();

const CourseController = require('../app/controllers/CourseController');

// router usually '/' before '/search'
route.post('/store', CourseController.store);
route.get('/create', CourseController.create);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.delete('/:id', CourseController.delete);
route.get('/:id/delete', CourseController.index);
route.get('/:slug', CourseController.index);

module.exports = route;
