import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true, 
        unique: true
    },
    price: {
        type: Number, 
        require: true
    }
})

export const Ticket = mongoose.model('Tickets', ticketSchema)