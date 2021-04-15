const express = require('express');

import {getPosts, createPost, createComment, deletePost, deleteComment, updatePost, getPostById, getCommentById} from '../controllers/posts.js'; 
const router = express.Router();


router.get('/', getPosts );
router.get('/:id', getPostById);
// router.get('/:id/:commentId', getCommentById);
router.post('/', createPost);
router.post('/:id', createComment);
router.delete('/:id', deletePost);
// router.patch('/:id', updatePost);
router.patch('/:id', updatePost);
// router.delete('/:postId/:comment', deleteComment);
// deleting this whole post /:id
// router.delete('/:id/:commentId', deleteComment);
// router.patch('/:id', deleteComment);
   

export default router;
