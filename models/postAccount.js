import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
});

const PostAccount = mongoose.model('PostAccount', postSchema);

// exporting mongoose model in postpost file
export default PostAccount;
