const express = require("express");

const path = require("path");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/addPost", postController.renderAddPostpage);
router.post("/", postController.createPost);

router.post("/post/:postId", postController.deletePost);

router.post("/editPost", postController.updatePost);

router.get("/editPost/:postId", postController.getOldPost);
module.exports = router;
