const Course = require('../module/Course');
const { multipleMongooseToObject } = require('../../ultil/moogose');
class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find()
      .then((courses) => {
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // [PUT] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted()
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
