const Post = require('../model/post');

const getPost = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(201).json({ post: post, message: 'success' });
  } catch (err) {
    res.send(err);
  }
};

const selectPost=async(req,res)=>
{
  try
  {
    const {id}=req.params
    const post=await Post.findOne({_id:id})
    res.status(201).send({message:"Sucess",post})
  }
  catch(err)
  {
    console.log(err)
  }
}

const createPost = async (req, res) => {
  try {
    // Extract fields from the request body
    const { title, message, tags } = req.body;
    const creator = "nesa";
    // Create a new Post object with the extracted fields
    const newPost = new Post({
      title,
      message,
      creator,
      tags,
      selectedfile:req.file.path,
    });

    // Save the new Post object to the database
    await newPost.save();
    res.status(201).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send('An error occurred while creating the post');
  }
};

const deletePost=async(req,res)=>
{
    try
    {
        const {id}=req.params
        const post=await Post.findOneAndDelete({_id:id})
        res.json({message:"deleted Sucessfully",post})
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = { getPost, createPost, deletePost,selectPost};