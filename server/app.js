const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./router");
const fs = require("fs");

const meta = require("./content/meta.json");
const post = require("./content/article.json");
const posts = require("./content/posts.json");
const comments = require("../db.json");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.set("meta", meta);
app.set("post", post);
app.set("posts", posts);
app.set("comments", comments);

app.use("*/static", express.static("public"));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
