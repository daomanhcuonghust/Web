import {logout} from '../models';


export const create = async (data) => {
    logout.create({
        Token: data
    })
    return await create;
}