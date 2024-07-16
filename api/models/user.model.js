import mongoose from "mongoose";

//creating schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://imgs.search.brave.com/hmEuQ3Zj79gNEhy-l1d9bGg74wngrtDpj77rtUe6bUE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE4LzAzLzM1/LzM2MF9GXzExODAz/MzUwNl91TXJobnJq/QldCeFZFOXNZR1Rn/Qmh0OFM1bGlWbkll/WS5qcGc"
    }

},{ timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;