import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
username: { type: String },
  
password: { type: String },
  id: { type: String },
});

const User = mongoose.model('User', userSchema);

// exporting mongoose model in postpost file
export default User;