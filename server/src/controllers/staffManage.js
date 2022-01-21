import { Staff } from "../models"
import { handleAsync } from "../utils"

export const updateStaff = handleAsync(async (req, res) => {
  try {
    const data = await Staff.findByIdAndUpdate(req.params.id, {
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
      salary: req.body.salary,
    })
    if (!data) {
      return res.json({
        message: "Cập nhật thất bại",
        cause: "Nhân viên không tồn tại",
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

export const getOneStaff = handleAsync(async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)
    if (!staff) {
      return res.json({
        message: "Xóa thất bại",
        cause: "Nhân viên không tồn tại",
      })
    }
    res.json({
      data: staff,
    })
  } catch (error) {
    res.json({
      message: "Tra cứu thất bại",
      error,
    })
  }
})

export const deleteStaff = handleAsync(async (req, res) => {
  try {
    const data = await Staff.findByIdAndRemove(req.params.id)
    if (!data) {
      return res.json({
        message: "Xóa thất bại",
        cause: "Nhân viên không tồn tại",
      })
    }
    res.json({
      message: "Xóa nhân viên thành công",
    })
  } catch (error) {
    res.json({
      message: "Xóa CSVC thất bại",
      error,
    })
  }
})
