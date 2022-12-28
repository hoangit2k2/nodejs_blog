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
  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render('courses/edit',{ 
          course: mongooseToObject(course)
        })
      })
      .catch(next)

}
  // [PUT] /course/:id
  update(req,res, next){
    // res.json(req.body)
    // console.log(req.params.id)y
    req.body.image = `https://img.youtube.com/vi/${req.body.videoid}/sddefault.jpg`
    Course.updateOne({_id: req.params.id},req.body)
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next)
  }

  // [DELETE] /course/:id
  delete(req,res, next){
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next)
  }
}
module.exports = new CourseController();
// const new
