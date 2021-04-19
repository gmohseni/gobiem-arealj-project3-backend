import mongoose from 'mongoose';
// import Account from '../models/account.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => { 
    // getting this from the frontend
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, 'test', { expiresIn: "1h" });
  
      res.status(200).json({ result: existingUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }


  export const signup = async (req, res) => {
    console.log(req.body);
    // console.log(res);
    const { username, password } = req.body;
    
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) return res.status(400).json({ message: "User already exists" });

      // if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await User.create({ username, password: hashedPassword });
  
      const token = jwt.sign( { username: result.username, id: result._id }, 'test', { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      // res.status(500).json({ message: "Something went wrong" });
      error.response.data
      console.error(error.response.data);
    }
  };
