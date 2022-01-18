import mongoose from "mongoose"

const user_ticketSchema = new mongoose.Schema({
  id_ticket: {
    type: String,
    require: true,
  },
  id_user: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
    default: 1,
  },
  is_paid: {
    type: Boolean,
    require: true,
    default: false,
  },
  is_vip: {
    type: Boolean,
    require: true,
    default: false,
  },
  price: {
    type: Number,
    require: true,
  },
  time_checkin: {
    type: Date,
    require: false,
  },
  time_checkout: {
    type: Date,
    require: false,
  },
})

export const User_ticket = mongoose.model("User_ticket", user_ticketSchema)
