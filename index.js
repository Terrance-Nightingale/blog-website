import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 80;
const posts = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});

app.post("/create-post", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body["title"],
        body: req.body["body"],
    }
    posts.push(newPost);
    res.redirect("/");
});

app.put("/edit-post", (req, res) => {
    newTitle = req.body.editTitle;
    newBody = req.body.editBody;
    console.log(newTitle);
    console.log(newBody);
    // Add new post to posts. Pass posts as a variable for ejs to loop through.
    res.redirect("/");
});

app.post("/delete-post", (req, res) => {
    const postToDelete = req.body.id;
    console.log(postToDelete);
    posts.pop(req.body['postToDelete']);
    // Add new post to posts. Pass posts as a variable for ejs to loop through.
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  