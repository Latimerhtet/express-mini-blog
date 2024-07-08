const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const Post = require("./models/post");
const User = require("./models/user");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
//middleware
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
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

Post.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Post);

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        userName: "Kaung Htet San",
        userEmail: "kaung@gmail.com",
      });
    }
    return user;
  })
  .then((user) => {
    console.log(user);
    app.listen(8080);
  })
  .catch((err) => console.log(err));
