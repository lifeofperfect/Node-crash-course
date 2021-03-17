const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

//get all posts

// router.get('/', (req, res)=> {
//     res.send("we work posts")
// })


router.get('/', async (req, res)=> {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

router.get("/specific", (req, res)=> {
    res.send("specific post")
})


//make a post
// router.post('/', (req, res)=> {
//     console.log(req.body);
// })

// router.post('/', (req,res)=> {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     post.save()
//         .then(data=>{
//             res.json(data)
//         })
//         .catch(err=> {
//             res.json({message: err})
//         })
// })

router.post('/', async (req, res)=> {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    try{
        const savePost = await post.save();
        res.json(savePost);

    }catch(err){
        res.json({message: err})
    }
})

//Specific post
router.get('/:postId', async (req, res)=> {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err})
    }
})

//delete a specific post
router.delete('/:postId', async (req, res)=> {
    try{
        const remove = await Post.remove({_id: req.params.postId})
        res.json(remove)
    }
    catch(err){
        res.json({message: err})
    }
})

router.patch('/:postId', async (req, res)=> {
    try{
        const update = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
            );
        res.json(update);
    }
    catch(err){
        res.json({message: err})
    }
})


module.exports = router;