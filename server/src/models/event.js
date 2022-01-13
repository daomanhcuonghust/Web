import mongoose  from 'mongoose';

const eventSchema = new mongoose.Schema({
    image : {
        type: String,
        require: true, 
    },
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String, 
        require: true, 

    },
    discount: {
        type: Number,
        require: true
    }
}, {timestamps:true})

export const Event = mongoose.model('Event', eventSchema)