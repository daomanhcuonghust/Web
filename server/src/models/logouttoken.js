import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
    Token: {
        type: String,
        required: true
    },
});

export const logout = mongoose.model('logouttoken', tokenSchema);