import { Ticket,User,User_ticket } from "../models";
import {handleAsync} from '../utils';

export const CreateTicket = handleAsync(async(req, res) => {
    try{
        const data = new Ticket(req.body);
        await data.save()
        res.json({
            message:"Tạo vé thành công",
            data
        });
    }catch(error){
        res.json({
            message:"Có lỗi xảy ra",
            error
        });
    }
})

export const updateTicket = handleAsync(async(req, res) => {
    try{
        const data = await Ticket.findByIdAndUpdate(req.params.id,{
            type:req.body.type,
            price:req.body.price,
        })
        if(!data){
           return res.json({
                message:"Cập nhật thất bại",
                cause:"Vé không tồn tại"
            });
        }
        res.json({
            message:"Cập nhật thành công",
            data
        });
    }catch(error){
        res.json({
            message:"Có lỗi xảy ra",
            error
        });
    }
})

export const deleteTicket = handleAsync(async(req, res) => {
    try{
        const data = await Ticket.findByIdAndRemove(req.params.id);
        if(!data){
            return res.json({
                 message:"Xóa thất bại",
                 cause:"Vé không tồn tại"
             });
         }
        res.json({
            message:"Xóa vé thành công"
        });
    }catch(error){
        res.json({
            message:"Xóa vé thất bại",
            error
        });
    }
})

export const UserBuyTicket = handleAsync(async(req, res) => {
    try{
        console.log(req)
        const isExistTicket = await Ticket.findById(req.body.id_ticket)
        const isExistUser = await User.findById(req.body.id_user)
        if(!isExistTicket && !isExistUser){
            return res.status(200).json({
                status:404,
                message:"Vé hoặc người mua vé không tồn tại"
            });
        }

        const data = new User_ticket(req.body);
        await data.save()
        res.json({
            message:"Mua vé thành công",
            data
        });
    }catch(error){
        res.json({
            message:"Có lỗi xảy ra",
            error
        });
    }
})