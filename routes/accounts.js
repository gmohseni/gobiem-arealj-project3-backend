const express = require('express');

import {getAccount, createAccount} from '../controllers/accounts.js'; 
const router = express.Router();

router.get('/', getAccount);
router.post('/', createAccount);
   
export default router;
