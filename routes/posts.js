const express = require('express');

import {getPosts, createPost, createComment, deletePost, updatePost, getPostById} from '../controllers/posts.js';
import auth from '../middleware/auth.js'; 
const router = express.Router();


router.get('/', getPosts );
router.get('/:id', getPostById);
router.post('/', auth, createPost);
router.post('/:id', auth, createComment);
router.delete('/:id', auth, deletePost);
router.patch('/:id', auth, updatePost);
   

export default router;
