const express = require('express');

import {signin, signup, fetchUsers} from '../controllers/account.js'; 
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/', fetchUsers);
   
export default router;
