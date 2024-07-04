const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
const path = require("path");
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
//middleware
app.use("/", (req, res, next) => {
  console.log("This is home middleware");
  next();
});
app.use("/post", (req, res, next) => {
  console.log("This is post middleware");
  next();
});
app.use("/admin", (req, res, next) => {
  console.log("admin middleware approved!");
  next();
});
//routes
app.use(postRoutes);
app.use("/admin", adminRoutes);
app.listen(8080);
