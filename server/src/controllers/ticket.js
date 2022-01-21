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
          "type.$.nameTicket": req.body.nameTicket,
          "type.$.price": req.body.price,
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

//delete type ticket
export const deleteTypeTickte = async (req, res, next) => {
  try {
    await Ticket.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $pull: { type: { _id: req.params.typeId } } }
    )

    res
      .status(200)
      .json({ success: true, message: "Delete type ticket success" })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error: error.message,
    })
  }
}

export const UserBuyTicket = handleAsync(async (req, res) => {
  try {
    const isExistTicket = await Ticket.find({
      type: { $elemMatch: { _id: req.body.id_ticket } },
    });
    const isExistUser = await User.findById(req.user.userId);

    if (!isExistTicket && !isExistUser) {
      return res.status(200).json({
        status: 404,
        message: "Vé hoặc người mua vé không tồn tại",
      })
    }

    const ticket={...req.body,id_user:req.user.userId}

    const data = new User_ticket(ticket);
    await data.save();

    res.json({
      success:true,
      message: "Mua vé thành công",
      data,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }

});

//Get user's ticket information
export const userTicket = async (req, res, next) => {
  const userId = req.params.userId
  try {
    const data = await User_ticket.find({
      id_user: userId,
    })

    const idTicket = data.map((item, index) => {
      return item.id_ticket
    })

    const tickets = await Ticket.find(
      {
        type: { $elemMatch: { _id: { $in: idTicket } } },
      },
      "type"
    )

    const listTick = []
    tickets.map((item, index) => {
      item.type.map((ticket, index) => {
        listTick.push(ticket)
      })
    })

    const result = []

    data.map((item, index) => {
      listTick.map((ticket, index) => {
        if (ticket._id == item.id_ticket) {
          const { updatedAt, ...other } = item._doc
          result.push({
            ...other,
            nameTicket: ticket.nameTicket,
            priceTicket: ticket.price,
          })
        }
      })
    })

    res.status(200).json({
      success: true,
      message: "Get user's ticket success",
      result: result,
    })
  } catch (error) {
    res.json({
      message: "Có lỗi xảy ra",
      error,
    })
  }
}

export const getIncome = handleAsync(async (req, res) => {
  try {
    const query = await User_ticket.find({
      is_paid: true,
      time_checkout: {
        $gte: req.body.time_from,
        $lte: req.body.time_to,
      },
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
