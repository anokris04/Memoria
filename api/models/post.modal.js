import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
            uniqie: true,
        },
        image: {
            type: String,
            default: 'https://imgs.search.brave.com/Nu0IQ3nwjSy7tCPDV4acn_k_Nthd77Fpr2hE-OI8mLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb25r/ZXlzYW5kbW91bnRh/aW5zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9U/cmF2ZWwtTWVtb3Jp/ZXMuanBn'
        },
        category: {
            type: String,
            default: 'uncategorised',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },

    },{ timestamps: true}
);

const Post = mongoose.model('Post', postSchema);
export default Post;