import {Demo} from '../models';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../configs';


export const getAll = async () => {
    return await Demo.find({});
}

export const create = async (data) => {
    const demo = new Demo({
        ...data
    });
    return await demo.save();
}

export const check = async (data) => {

    const login = Demo.findOne({
        email: data.email,
        password: data.password
    });

    data = await login;
    return  jwt.sign({
        _id: data._id
    }, JWT_SECRET)
}