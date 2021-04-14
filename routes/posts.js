const express = require('express');

import {getPosts, createPost, createComment, deletePost, deleteComment, updatePost, getPostById} from '../controllers/posts.js'; 
const router = express.Router();


router.get('/', getPosts );
router.get('/:id', getPostById);
router.post('/', createPost);
router.post('/:id', createComment);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
router.delete('/:postId/:commentId', deleteComment);
   

export default router;
