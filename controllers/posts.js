import mongoose from 'mongoose';
import PostPost from '../models/postPost.js';

export const getPosts = async (req, res) => { 
    try{
        const postPosts = await PostPost.find();
        

        res.status(200).json(postPosts);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    console.log(req.body);
    const post = req.body;
    const newPost = new PostPost(post);
    console.log(newPost);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error){
        res.status(409).json({message: error.message});
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostPost.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully"});
}
