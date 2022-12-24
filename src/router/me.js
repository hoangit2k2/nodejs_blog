var express = require('express');
var route = express.Router();

const MeController = require('../app/controllers/MeController');

// router usually '/' before '/search'
route.get('/stored/courses', MeController.storedCourses);


module.exports = route;
