const router = require("express").Router();
const Post = require("../models/Post");
//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update post
router.put("/:id", async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
//This I think makes no sense to me, the dude is asking the machine to recognize that the userId of the post that is in the url bar is the same as the userId (of the user who wants to edit the post) that we place in the request Json in Postman(right?). Instead we want the post id or req.params.id to match an existing id (and I dont see shadow of that error handling here). Additionally, we want the user to be authorised so the userId to whom the post belongs, should match the userId of the user wanting to edit. 
    await post.updateOne({$set:req.body});
    res.status(200).json("The post has been updated")
    } else {
      res.status(403).json("you can only update your own posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//delete post
router.delete("/:id", async (req, res) => {
    try {
      const post = Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
      await post.deleteOne({$set: req.body});
      res.status(200).json("The post has been deleted")
      } else {
        res.status(403).json("you can only delete your own posts");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
//like post
//get post
//get all posts (1 user's)

module.exports = router;
