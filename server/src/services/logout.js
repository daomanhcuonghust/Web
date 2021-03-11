import {logout} from '../models';


export const disable = async (data) => {
    logout.create({
        Token: data
    })
    return await disable;
}