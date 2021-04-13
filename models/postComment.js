import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    id: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostComment = mongoose.model('PostComment', postSchema);

// exporting mongoose model in postpost file
export default PostComment;