const posts = [];
exports.createPost = (req, res) => {
  const { title, description, image } = req.body;

  posts.push({
    id: Math.random(),
    image,
    title,
    description,
  });
  console.log(posts);
  res.redirect("/");
};

exports.renderAddPostpage = (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "views", "addpost.html"));
  res.render("addPost", { title: "Add Post" });
};

exports.renderHomePage = (req, res) => {
  console.log(posts);
  // res.sendFile(path.join(__dirname, "..", "views", "home.html"));
  res.render("home", { title: "Home", postsArray: posts });
};

exports.getPost = (req, res) => {
  const postId = Number(req.params.postId);
  console.log(postId);
  const post = posts.find((post) => post.id === postId);
  // console.log(post);
  res.render("post", { title: "Post Detail", targetPost: post });
};
