const { Sequelize, STRING, INTEGER } = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: STRING,
  userEmail: STRING,
});

module.exports = User;
