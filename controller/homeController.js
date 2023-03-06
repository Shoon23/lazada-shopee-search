const index = (req, res) => {
  const searchKey = req.query.searchKey;

  console.log(searchKey);

  res.render("home-page");
};

module.exports = { index };
