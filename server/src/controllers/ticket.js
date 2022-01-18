import { Ticket, User, User_ticket } from "../models"
import { handleAsync } from "../utils"

export const CreateTicket = handleAsync(async (req, res) => {
  try {
    const data = new Ticket(req.body)
    await data.save()
    res.json({
      message: "Tạo vé thành công",
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
})

//Tạo vé vào cửa hoặc tô tượng
export const createTypeTicket = async (req, res, next) => {
  try {
    const idTicket = req.params.id
    const ticket = await Ticket.findOne({ _id: idTicket })
    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Not found ticket" })
    }
    await Ticket.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { type: req.body },
      }
    )

    res
      .status(200)
      .json({ success: true, message: "create type ticket success" })
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}

//Lấy vé trả phí theo thời gian hoặc mất phí(tô tượng,...)
export const infoTicket = async (req, res, next) => {
  const idTicket = req.params.id

  try {
    const ticket = await Ticket.findById(idTicket)
    if (!ticket) {
      return res.status(404).json({ success: false, message: "Not Found" })
    }

    res.status(200).json({ success: true, message: "Success", result: ticket })
  } catch (error) {
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}

//update kiểu vé (vé 2h,tô tượng,....);
export const updateTypeTicket = async (req, res, next) => {
  try {
    const idTicket = req.params.id
    const ticket = await Ticket.findById(idTicket)
    if (!ticket) {
      return res.status(404).json({ success: false, message: "Not Found" })
    }

    const typeIdTicket = req.params.typeId

    await Ticket.updateOne(
      {
        _id: idTicket,
        type: { $elemMatch: { _id: typeIdTicket } },
      },
      {
        $set: {
          type: req.body,
        },
      }
    )

    res
      .status(200)
      .json({ success: true, message: "update type ticket success" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" })
  }
}

export const updateTicket = handleAsync(async (req, res) => {
  try {
    const data = await Ticket.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
    })
    if (!data) {
      return res.json({
        message: "Cập nhật thất bại",
        cause: "Vé không tồn tại",
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

export const deleteTicket = handleAsync(async (req, res) => {
  try {
    const data = await Ticket.findByIdAndRemove(req.params.id)
    if (!data) {
      return res.json({
        message: "Xóa thất bại",
        cause: "Vé không tồn tại",
      })
    }
    res.json({
      message: "Xóa vé thành công",
    })
  } catch (error) {
    res.json({
      message: "Xóa vé thất bại",
      error,
    })
  }
})

export const UserBuyTicket = handleAsync(async (req, res) => {
  try {
    const isExistTicket = await Ticket.findById(req.body.id_ticket)
    const isExistUser = await User.findById(req.body.id_user)
    if (!isExistTicket && !isExistUser) {
      return res.status(200).json({
        status: 404,
        message: "Vé hoặc người mua vé không tồn tại",
      })
    }

    const data = new User_ticket(req.body)
    await data.save()
    res.json({
      message: "Mua vé thành công",
      data,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
})

export const getIncome = handleAsync(async (req, res) => {
  try {
    const query = await User_ticket.find({
      is_paid: true,
      time_checkout: req.body.time_checkout,
    })
    res.json({
      data: query,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
})
