const scrapeProducts = require("../utils/scrapeProducts");

const searchProduct = async (req, res) => {
  const searchKey = req.query.searchKey;

  const shopee = await scrapeProducts.getProduct(
    `https://shopee.ph/search?keyword=${searchKey}`
  );
  const lazada = await scrapeProducts.getProduct(
    `https://www.lazada.com.ph/tag/pants/?q=${searchKey}&_keyori=ss&from=input&spm=a2o4l.home.search.go.239e2030CcFKjo&catalog_redirect_tag=true`
  );

  res.render("product-page", { products, searchKey });
};

module.exports = { searchProduct };
