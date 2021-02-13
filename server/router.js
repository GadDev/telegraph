const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log(req.app.get("meta"));
	res.render("home", {
		meta: req.app.get("meta"),
	});
});

router.get("/:post", (req, res) => {
	const postName = req.params.post;
	console.log(postName);
	const { post } = req.app.get("post");
	const { posts } = req.app.get("posts");
	const postsFiltered = posts.filter((item) => item.category === post.category);
	res.render("article", {
		post,
		posts: postsFiltered,
	});
});

router.all("*", (req, res) => {
	res.render("notfound");
});

module.exports = router;
