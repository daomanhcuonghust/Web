import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: [
      {
        nameTicket: String,
        price: Number,
        time_start: Date,
        time_end: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Ticket = mongoose.model("Tickets", ticketSchema);
