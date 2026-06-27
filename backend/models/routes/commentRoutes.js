const express = require("express");

const Comment = require("../models/Comment");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:postId", auth, async(req,res)=>{

    const comment =
    await Comment.create({
        text:req.body.text,
        user:req.user.id,
        post:req.params.postId
    });

    res.json(comment);
});

router.get("/:postId", async(req,res)=>{

    const comments =
    await Comment.find({
      post:req.params.postId
    }).populate(
      "user",
      "username"
    );

    res.json(comments);
});

module.exports = router;