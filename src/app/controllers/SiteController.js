const Course = require('../module/Course')

class SiteController {
  // [GET] /
  index(req, res) {
    Course.find({}, function(err, course){
      if(!err) {
       return res.json(course)
      }
      else{
        return res.status(400).json({err :'Message'})
      }
    })

    // res.render('home');
  }

  // [GET] /searc
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
// const new
