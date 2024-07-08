const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog", "root", "kaungpichi10822", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
