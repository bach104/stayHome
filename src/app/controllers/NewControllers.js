class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("newsDetail");
  }
}

module.exports = new NewsController();
