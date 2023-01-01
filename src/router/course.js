var express = require('express');
var route = express.Router();

const CourseController = require('../app/controllers/CourseController');

// router usually '/' before '/search'
route.post('/store', CourseController.store);
route.get('/create', CourseController.create);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.patch('/:id/restore', CourseController.restore);
route.delete('/:id', CourseController.delete);
route.delete('/:id/force', CourseController.forceDelete);
// route.get('/:id/delete', CourseController.index);
route.get('/:slug', CourseController.index);

module.exports = route;
