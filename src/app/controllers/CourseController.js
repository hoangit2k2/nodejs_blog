const Course = require('../module/Course');
const { mongooseToObject } = require('../../ultil/moogose');
class CourseController {

  // [GET] /courses/:slug
  index(req, res, next) {
    // res.send(req.params.slug);
    Course.findOne({slug: req.params.slug})
    .then(course => {
      res.render('courses/show', {
        course: mongooseToObject(course)
      })
    })
    .catch(next)
  }
  
  // [GET] /course/create
  create(req, res, next){
    res.render('courses/create')
  }
  // [POST] /course/store
  store(req, res, next){
  }


}
module.exports = new CourseController();
// const new
