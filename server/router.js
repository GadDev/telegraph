const express = require("express");
const router = express.Router();
const moment = require("moment");

router.get("/", (req, res) => {
	res.render("home", {
		meta: req.app.get("meta"),
	});
});

router.get("/:post", (req, res) => {
	const { comments } = req.app.get("comments");
	const { posts } = req.app.get("posts");
	const { post } = req.app.get("post");

	const postsFiltered = posts.filter((item) => item.category === post.category);
	const dateFormatted = moment(post.date).format("dddd Do MMMM YYYY, h:mma");
	const postRequested = { ...post, date: dateFormatted };

	const commentsPost = comments.map((comment) => {
		const dateFormatted = moment(comment.date).format("Do MMMM YYYY h:mma");
		const commentFormatted = {
			...comment,
			date: dateFormatted,
			dateNonFormatted: comment.date,
		};
		return commentFormatted;
	});

	res.render("article", {
		post: postRequested,
		posts: postsFiltered,
		comments: commentsPost,
		totalComments: commentsPost.length,
	});
});

router.all("*", (req, res) => {
	res.render("notfound");
});

module.exports = router;
