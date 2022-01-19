import { Staff, User, User_ticket, Ticket } from "../models";

export const checkInTicket = async (req, res, next) => {
  const idStaff = req.user.userId;
  try {
    const data = req.body;
    const staff = await Staff.findById(idStaff);
    if (staff.role !== 2) {
      return res
        .status(400)
        .json({ success: false, message: "Only the front desk can check in" });
    }
    const ticket = await User_ticket.findById(data.idUserTicket);

    //console.log('ticket',ticket)
    if (ticket) {
      await ticket.updateOne({ $set: { time_checkin: data.time_checkin } });
    } else {
      const isExistTicket = await Ticket.find({
        type: { $elemMatch: { _id: req.body.id_ticket } },
      });
      if (!isExistTicket) {
        return res.status(200).json({
          status: 404,
          message: "Vé hoặc người mua vé không tồn tại",
        });
      }
      const userTicket = new User_ticket(req.body);
      await userTicket.save();
    }

    res.status(200).json({ status: true, message: "Checkin success" });
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    });
  }
};

export const checkoutTicket = async (req, res, next) => {
  const idStaff = req.user.userId;
  try {
    const data = req.body;
    const staff = await Staff.findById(idStaff);
    if (staff.role !== 2) {
      return res
        .status(400)
        .json({ success: false, message: "Only the front desk can check in" });
    }
    
    const ticket = await User_ticket.findById(data.idUserTicket);

    if (!ticket) {
      res.json({
        message: "Có lỗi xảy ra",
      });
    }
    await ticket.updateOne({ $set: { time_checkout: data.time_checkout } });

    res.status(200).json({ status: true, message: "Checkout success" });
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    });
  }
};
