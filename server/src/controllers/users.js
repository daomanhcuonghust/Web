import { User, User_ticket, Event, User_event } from "../models"
import { handleAsync } from "../utils"
import bcrypt from "bcrypt"

export const updateUser = handleAsync(async (req, res) => {
  try {
    var newPassword
    if (req.body.password) {
      newPassword = await bcrypt.hash(req.body.password, 8)
    }
    let params = {
      phoneNumber: req.body.phoneNumber,
      password: newPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      is_vip: req.body.is_vip,
      id_vip_transition: req.body.id_vip_transition,
    }
    for (let prop in params) if (!params[prop]) delete params[prop]
    const data = await User.findByIdAndUpdate(req.params.id, params)
    if (!data) {
      return res.json({
        message: "Cập nhật thất bại",
        cause: "Khách hàng không tồn tại",
      })
    }
    const newdata = await User.findById(req.params.id)
    res.json({
      message: "Cập nhật thành công",
      newdata,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
})

export const deleteUser = handleAsync(async (req, res) => {
  try {
    const data = await User.findByIdAndRemove(req.params.id)
    if (!data) {
      return res.json({
        message: "Xóa thất bại",
        cause: "Khách hàng không tồn tại",
      })
    }
    res.json({
      message: "Xóa khách hàng thành công",
    })
  } catch (error) {
    res.json({
      message: "Xóa khách hàng thất bại",
      error,
    })
  }
})

export const getPersonalInfo = async (req, res, next) => {
  const idUser = req.params.id
  try {
    const userinfo = await User.findById(idUser)
    const userticket = await User_ticket.find({ id_user: idUser })
    if (!userinfo) {
      return res.status(404).json({ success: false, message: "User Not Found" })
    }
    if (!userticket) {
      return res.status(200).json({
        success: true,
        message: "Success",
        info: userinfo,
        tickets: "Nothing",
      })
    }
    res.status(200).json({
      success: true,
      message: "Success",
      info: userinfo,
      tickets: userticket,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}

export const personalUpdateUser = handleAsync(async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, {
      phoneNumber: req.body.phoneNumber,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
    if (!data) {
      return res.json({
        message: "Cập nhật thất bại",
        cause: "Khách hàng không tồn tại",
      })
    }
    const newdata = await User.findById(req.params.id)
    res.json({
      message: "Cập nhật thành công",
      newdata,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
})

//events that users participate in
export const userJoinEvents = async (req, res, next) => {
  try {
    const userId = req.user.userId
    const participants = await User_event.find({ id_user: userId })

    const Idevents = participants.map((item, index) => item.id_event)

    const events = await Event.find({ _id: { $in: Idevents } })

    res.status(200).json({
      success: true,
      message: "Information of event participants",
      result: events,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}
