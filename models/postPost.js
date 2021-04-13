import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    id: String,
    title: String,
    url: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: []
});

const PostPost = mongoose.model('PostPost', postSchema);

// exporting mongoose model in postpost file
export default PostPost;
