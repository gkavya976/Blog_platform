const express = require("express");

const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async(req,res)=>{

    const post = await Post.create({
        title:req.body.title,
        content:req.body.content,
        author:req.user.id
    });

    res.json(post);
});

router.get("/", async(req,res)=>{

    const posts =
    await Post.find()
    .populate("author","username");

    res.json(posts);
});

router.put("/:id", auth, async(req,res)=>{

    const updated =
    await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );

    res.json(updated);
});

router.delete("/:id", auth, async(req,res)=>{

    await Post.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:"Deleted"
    });
});

module.exports = router;