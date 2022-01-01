import mongoose from 'mongoose';

const postSchema = mongoose.Schema ({
    title:String,
    message: String,
    creator: String,
    tags:[String], 
    selected: String,
    linkCount: {
        type: Number,
        default: 0
    },
    createdAt :  {
        type: new Date()
    },
});
const postMessage = mongoose.model('postMessage' );
export default postMessage;
