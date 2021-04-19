const express = require('express');

import {getPosts, createPost, createComment, deletePost, deleteComment, updatePost, getPostById, getCommentById} from '../controllers/posts.js';
import auth from '../middleware/auth.js'; 
const router = express.Router();


router.get('/', getPosts );
router.get('/:id', getPostById);
// router.get('/:id/:commentId', getCommentById);
router.post('/', auth, createPost);
router.post('/:id', auth, createComment);
router.delete('/:id', auth, deletePost);
// router.patch('/:id', updatePost);
router.patch('/:id', auth, updatePost);
// router.delete('/:postId/:comment', deleteComment);
// deleting this whole post /:id
// router.delete('/:id/:commentId', deleteComment);
// router.patch('/:id', deleteComment);
   

export default router;
