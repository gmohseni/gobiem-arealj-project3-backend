import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    username: String,
    password: String,
});

const PostAccount = mongoose.model('PostAccount', postSchema);

// exporting mongoose model in postpost file
export default PostAccount;
