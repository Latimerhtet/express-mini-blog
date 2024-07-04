const express = require("express");

const path = require("path");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/addPost", postController.renderAddPostpage);
router.post("/", postController.createPost);

module.exports = router;
