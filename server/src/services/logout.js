import {logouttoken} from '../models';


export const disable = async (data) => {
    logouttoken.create({
        Token: data
    })
    return await logouttoken.create;
}