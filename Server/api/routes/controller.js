const Post = require("../models/model");

async function all (req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({err})
    }
}

async function create (req, res) {
    try {
        const post = await Post.create(req.body);
        res.status(200).json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

async function showByid(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ ...post});
    } catch (err) {
        res.status(500).send(err);
    };
}

module.exports = {showByid, create, all};
