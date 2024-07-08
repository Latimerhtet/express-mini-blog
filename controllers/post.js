// const posts = [];
const Post = require("../models/post");

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
  req.user
    .createPost({
      title,
      description,
      image_url: image,
    })
    .then((result) => {
      console.log(result);
      console.log("Create Haha!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderAddPostpage = (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "views", "addpost.html"));
  res.render("addPost", { title: "Add Post" });
};

exports.getPosts = (req, res) => {
  // console.log(posts);
  // res.sendFile(path.join(__dirname, "..", "views", "home.html"));
  Post.findAll({ order: [["createdAt", "desc"]] })
    .then((posts) => res.render("home", { title: "Home", postsArray: posts }))
    .catch((err) => console.log(err));
};

exports.getPost = (req, res) => {
  const postId = Number(req.params.postId);
  Post.findOne({ where: { id: postId } })
    .then((post) => {
      res.render("post", { title: "Post Detail", targetPost: post });
    })
    .catch((err) => console.log(err));
};

exports.deletePost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      if (!post) {
        return res.redirect("/");
      }
      return post.destroy();
    })
    .then((result) => {
      return res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getOldPost = (req, res) => {
  const postId = req.params.postId;
  Post.findByPk(postId)
    .then((post) => {
      res.render("editPost", { title: `${post.title}`, post });
    })
    .catch((err) => console.log(err));
};

exports.updatePost = (req, res) => {
  const { title, description, image, postId } = req.body;
  Post.findByPk(postId)
    .then((post) => {
      (post.title = title),
        (post.description = description),
        (post.image_url = image);
      return post.save();
    })
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};
