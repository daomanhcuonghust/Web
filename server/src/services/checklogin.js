import {Demo, User} from '../models';


export const checklogin = async (data) => {

    const login = User.findOne({
        email: data.email,
        password: data.password
    });

    data = await login;
    return  data;
}