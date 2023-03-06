const express = require("express");
const scrapeRoutes = require("./routes/scrapeRoutes");
const homeRoutes = require("./routes/homeRoutes");
const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/search", scrapeRoutes);
app.use("/", homeRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
