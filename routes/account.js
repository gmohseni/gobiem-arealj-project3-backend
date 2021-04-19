const express = require('express');

// getAccount--> signin
// createAccount --> signup
import {signin, signup} from '../controllers/account.js'; 
const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
   
export default router;
