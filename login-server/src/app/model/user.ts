import { Schema, model } from 'mongoose';

const user_schema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

export default model("User", user_schema);