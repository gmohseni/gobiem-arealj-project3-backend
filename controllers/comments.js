import mongoose from 'mongoose';
import PostComment from '../models/postComment.js';

export const getComments = async (req, res) => { 
    // try{
    //     const { id } = req.params;

    //     console.log(id);
    //     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");
    //     const postComments = await PostComment.findById(id);
    
    //     res.status(200).json(postComments);
    // } catch (error){
    //     res.status(404).json({message: error.message});
    // }
}

export const createComment = async (req, res) => {
    // const comment = req.body;
    // const newComment = new PostComment(comment);
    // try{
    //     await newComment.save();
    //     res.status(201).json(newComment);

    // } catch (error){
    //     res.status(409).json({message: error.message});
    // }
}
