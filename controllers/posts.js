import mongoose from 'mongoose';
import PostPost from '../models/postPost.js';
const { v4: uuidv4 } = require('uuid');

export const getPosts = async (req, res) => { 
    try{
        const postPosts = await PostPost.find();
        

        res.status(200).json(postPosts);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getPostById = async (req, res) => { 
    try{
        const { id: _id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

        const postPost = await PostPost.findById(_id);
    
        res.status(200).json(postPost);
    } catch (error){
        console.log(error);
        res.status(404).json({message: error.message});
    }
}


export const getCommentById = async (req, res) => { 
    try{
        const {id: _id, commentId: commentId} = req.params;
       
        
        if(!mongoose.Types.ObjectId.isValid(commentId)) return res.status(404).send("No post with that id");

        const postPost = await PostPost.findOne({"comments.id": commentId});
    
        res.status(200).json(postPost);
    } catch (error){
        console.log(error);
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostPost(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error){
        res.status(409).json({message: error.message});
    }
}

export const createComment = async (req, res) => {
    try{
        const { id: _id } = req.params;
        const comment = req.body;
        comment.id = uuidv4();
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

        const foundPost = await PostPost.findByIdAndUpdate(_id, {$push: {comments: comment}}, {new: true});

        res.json({message: "Post updated successfully with comment", foundPost});

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

export const deleteComment = async (req, res) => {
    // console.log(req.params);
    const { id, commentId } = req.params;
    

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

    await PostPost.findById(id).findByIdAndDelete(commentId);

    res.json({ message: "Comment deleted successfully"});
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;

    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const foundPost = await PostPost.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json({message: "Post updated successfully, just post", foundPost});
};


