import { User, User_ticket, User_event, Vip_transition } from "../models"
import { handleAsync } from "../utils"

export const updateUser = handleAsync(async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, {
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      is_vip: req.body.is_vip,
      id_vip_transition: req.body.id_vip_transition,
    })
    if (!data) {
      return res.json({
        message: "Cập nhật thất bại",
        cause: "Khách hàng không tồn tại",
      })
    }
    res.json({
      message: "Cập nhật thành công",
      data,
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
