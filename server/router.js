const express = require("express");
const router = express.Router();
const moment = require("moment");

router.get("/", (req, res) => {
	console.log(req.app.get("meta"));
	res.render("home", {
		meta: req.app.get("meta"),
	});
});

router.get("/:post", (req, res) => {
	const { comments } = req.app.get("comments");
	const { posts } = req.app.get("posts");
	const { post } = req.app.get("post");
	const dateFormatted = moment(post.date).format("dddd Do MMMM YYYY, h:mma");
	const postRequested = { ...post, date: dateFormatted };

	const postsFiltered = posts.filter((item) => item.category === post.category);
	res.render("article", {
		post: postRequested,
		posts: postsFiltered,
	});
});

router.all("*", (req, res) => {
	res.render("notfound");
});

module.exports = router;
