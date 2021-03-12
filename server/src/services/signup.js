import {User} from '../models';
export const getAll = async () => {
    return await User.find({
        
    });
}

export const create = async (data) => {
    const user = new User({
         email: data.email,
         password:data.password,
         firstName:data.firstName,
         lastName:data.lastName
    });
    return await user.save();
}