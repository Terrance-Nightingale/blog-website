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
        id: posts.length,
        title: req.body["title"],
        body: req.body["body"],
    }
    posts.push(newPost);
    res.redirect("/");
});

app.post("/edit-post", (req, res) => {
    const postToEdit = parseInt(req.body.id);
    const newTitle = req.body.editTitle;
    const newBody = req.body.editBody;

    posts[posts.findIndex(post => post.id === postToEdit)].title = newTitle;
    posts[posts.findIndex(post => post.id === postToEdit)].body = newBody;

    res.redirect("/");
});

app.post("/delete-post", (req, res) => {
    const postToDelete = parseInt(req.body.id);

    posts.splice(posts.findIndex(post => post.id === postToDelete), 1);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  