import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    count: {
        type: Number,
        default: 0
    }

})

const userSchema = mongoose.model('user', user)
export default userSchema