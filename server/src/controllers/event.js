import { Event,User,User_event } from "../models";
import {handleAsync} from '../utils';

export const createEvent = handleAsync(async(req, res) => {
    try{
        const data = new Event(req.body);
        await data.save()
        res.json({
            message:"Tạo sự kiện thành công",
            data
        });
    }catch(error){
        res.json({
            message:"Có lỗi xảy ra",
            error
        });
    }
})

export const updateEvent = handleAsync(async(req, res) => {
    try{
        const data = await Event.findByIdAndUpdate(req.params.id,{
            image:req.body.image,
            name:req.body.name,
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

export const deleteEvent = handleAsync(async(req, res) => {
    try{
        const data = await Event.findByIdAndRemove(req.params.id);
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

export const UserRegisterEvent = handleAsync(async(req, res) => {
    try{
        console.log(req)
        const isExistTicket = await Event.findById(req.body.id_ticket)
        const isExistUser = await User.findById(req.body.id_user)
        if(!isExistTicket && !isExistUser){
            return res.status(200).json({
                status:404,
                message:"Vé hoặc người mua vé không tồn tại"
            });
        }

        const data = new User_event(req.body);
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