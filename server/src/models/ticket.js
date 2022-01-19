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
        price: Number
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Ticket = mongoose.model("Tickets", ticketSchema);
