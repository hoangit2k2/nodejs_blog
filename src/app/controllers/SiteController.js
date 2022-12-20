const Course = require('../module/Course');
const { multipleMongooseToObject } = require('../../ultil/moogose');
class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /searc
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
// const new
