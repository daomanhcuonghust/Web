import { Vip_transition } from "../models/vip_transition";
import { Demo, User, Staff } from "../models";

export const createVipTicket = async (req, res, next) => {
  try {
    const data = req.body;
    const userId = req.user.userId;
    const vipTicket = new Vip_transition(data);
    await vipTicket.save();

    await User.findOneAndUpdate(
      { _id: userId },
      {
        id_vip_transition: vipTicket._id,
        is_vip: true,
      }
    );
    res.status(200).json({ success: true, message: "Register success" });
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};



