const Course = require('../models/Course');

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then(courses => 
        res.render('home', { courses }) // Gửi dữ liệu vào view
      )
      .catch(next);
  }
  
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
