import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 80;
const posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/create-post", (req, res) => {
    const newPost = {
        title: req.body["title"],
        body: req.body["body"],
    }
    posts.push(newPost);
    res.render("index.ejs", {posts: posts});
});

app.put("/edit-post", (req, res) => {
    // Add new post to posts. Pass posts as a variable for ejs to loop through.
    res.render("index.ejs");
});

app.delete("/edit-post", (req, res) => {
    // Add new post to posts. Pass posts as a variable for ejs to loop through.
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  