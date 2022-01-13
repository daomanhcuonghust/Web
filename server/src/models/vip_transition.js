import mongoose from 'mongoose';

const vip_transition_Schema = new mongoose.Schema({
    is_paid: {
        type: Boolean,
        require: true,

    }
},{timestamps:true});

export const Vip_transition = mongoose.model('Vip_transition', vip_transition_Schema)