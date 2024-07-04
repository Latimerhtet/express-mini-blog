const express = require("express");
const path = require("path");

const router = express.Router();

const postControllers = require("../controllers/post");
router.get("/", postControllers.renderHomePage);
router.get("/post/:postId", postControllers.getPost);
module.exports = router;