const { Sequelize, INTEGER, STRING, TEXT } = require("sequelize");
const sequelize = require("../util/database");

const Post = sequelize.define("post", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: TEXT,
    allowNull: false,
  },
  image_url: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Post;
