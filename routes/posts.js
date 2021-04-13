const express = require('express');

import {getPosts, createPost, createComment, deletePost, updatePost, getPostById} from '../controllers/posts.js'; 
const router = express.Router();


router.get('/', getPosts );
router.get('/:id', getPostById);
router.post('/', createPost);
router.post('/:id', createComment);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);
   

export default router;
