import mongoose from 'mongoose';

const demoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

export const Demo = mongoose.model('Demo', demoSchema);