const Course = require('../module/Course');
const { mongooseToObject } = require('../../ultil/moogose');
class CourseController {
  // [GET] /courses/:slug
  index(req, res, next) {
    // res.send(req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render('courses/create');
  }
  // [POST] /course/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`;
    const course = new Course(formData);
    console.log(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch();
  }
}
module.exports = new CourseController();
// const new
