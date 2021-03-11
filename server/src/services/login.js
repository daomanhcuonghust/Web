import {Demo, User} from '../models';


export const checklogin = async (data) => {

    return await User.findOne({
        email: data.email,
        password: data.password
    });
}